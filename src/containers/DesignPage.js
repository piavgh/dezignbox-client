import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Route, Switch} from "react-router-dom";
import axios from 'axios';
import {
  Row,
  Col
} from 'reactstrap';

import Utils from '../helpers/utils';
import '../css/DesignPage.css';
import Tools from "../components/DesignPage/Tools";
import Canvas from "../components/DesignPage/Canvas";
import CampaignInfo from "../components/DesignPage/CampaignInfo";
import {
  handleCampaignInfoInputChange,
  saveImageUrl,
  saveCanvasDataUrl,
  createCampaign
} from "../redux/actions/campaigns.actions";
import Spinner from "../components/Common/Spinner";
import {spinnerService} from "../services/spinner.services";
import {setAlertSuccess, setAlertError} from "../redux/actions/alert.actions";

class DesignPage extends Component {

  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  static propTypes = {};

  state = {
    text: '',
    image: null
  };

  handleTextChange = e => {
    this.setState({text: e.target.value});
  };

  handleFileDrop = files => {
    this.toggleLoader();
    const uploaders = files.map(file => {
      // Initial FormData
      const formData = new FormData();
      formData.append("file", file);
      formData.append("tags", `dezignbox`);
      formData.append("upload_preset", "ltvpxyqw"); // Replace the preset name with your own
      formData.append("api_key", "285863254151261"); // Replace API key with your own Cloudinary key
      formData.append("timestamp", (Date.now() / 1000) | 0);

      // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
      return axios.post("https://api.cloudinary.com/v1_1/dezignbox/image/upload", formData, {
        headers: {"X-Requested-With": "XMLHttpRequest"},
      }).then(response => {
        const data = response.data;
        this.props.saveImageUrl(data.secure_url);
      })
    });

    // Once all the files are uploaded
    axios.all(uploaders).then(() => {
      // ... perform after upload is successful operation
      this.setState({
        image: files[0].preview
      }, this.toggleLoader());
    });
  };

  handleFinalizeDesign = () => {
    this.toggleLoader();
    // 1. Store canvas stage JSON to redux store: newCampaign.canvasObject
    this.props.saveCanvasDataUrl(this.canvas.current.container.current.toDataURL({
      mimeType: 'image/png'
    }));

    // 2. Create campaign
    this.props.createCampaign(this.props.userId, this.props.campaignsReducer.newCampaign)
      .then((result) => {
        this.toggleLoader();
        this.props.history.push('/products');
        this.props.setAlertSuccess('Your campaign has been created.');
      })
      .catch((err) => {
        this.toggleLoader();
        console.log(err);
        this.props.setAlertError(err);
      });
  };

  handleCampaignInfoInputChange = (e) => {
    this.props.handleCampaignInfoInputChange(
      e.target.id,
      Utils.handleOptionInput(e.target.value),
      {
        reduxField: "newCampaign"
      }
    );
  };

  toggleLoader = () => {
    if (spinnerService.isShowing('designPageSpinner')) {
      spinnerService.hide('designPageSpinner');
    } else {
      spinnerService.show('designPageSpinner');
    }
  };

  render() {
    const {campaignsReducer} = this.props;

    return (
      <div>
        <Spinner
          name="designPageSpinner"/>

        <Row className="campaign-design-container">
          <Col xs={{size: 10, offset: 1}} lg={{size: 4, offset: 0}}>
            <Switch>
              <Route path="/start-design/design" render={() => {
                return <Tools
                  onTextChange={this.handleTextChange}
                  onFileDrop={this.handleFileDrop}/>
              }}/>
              <Route path="/start-design/campaign-info" render={() => {
                return <CampaignInfo
                  title={campaignsReducer.newCampaign.title}
                  description={campaignsReducer.newCampaign.description}
                  status={campaignsReducer.newCampaign.status}
                  submitButtonTitle="Finalize Design"
                  handleInputChange={this.handleCampaignInfoInputChange}
                  handleFormSubmit={this.handleFinalizeDesign}
                />
              }}/>
            </Switch>
          </Col>
          <Col xs={{size: 10, offset: 1}} lg={{size: 8, offset: 0}}>
            <Canvas
              text={this.state.text}
              image={this.state.image}
              ref={this.canvas}/>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    campaignsReducer: state.campaignsReducer,
    userId: state.authReducer.currentUser._id
  }
);

const mapDispatchToProps = dispatch => (
  {
    handleCampaignInfoInputChange: bindActionCreators(handleCampaignInfoInputChange, dispatch),
    saveImageUrl: bindActionCreators(saveImageUrl, dispatch),
    saveCanvasDataUrl: bindActionCreators(saveCanvasDataUrl, dispatch),
    createCampaign: bindActionCreators(createCampaign, dispatch),
    setAlertSuccess: bindActionCreators(setAlertSuccess, dispatch),
    setAlertError: bindActionCreators(setAlertError, dispatch)
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DesignPage);
