import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {
  Row,
  Col
} from 'reactstrap';

import "../css/DetailPage.css";
import {
  fetchCampaignDetail,
  handleCampaignInfoInputChange,
  updateCampaign
} from "../redux/actions/campaigns.actions";
import Spinner from "../components/Common/Spinner";
import CampaignInfo from "../components/DesignPage/CampaignInfo";
import Utils from "../helpers/utils";

class DetailPage extends Component {

  componentDidMount() {
    this.props.fetchCampaignDetail(this.props.match.params.id).then((data) => {

    });
  }

  handleCampaignInfoInputChange = (e) => {
    this.props.handleCampaignInfoInputChange(
      e.target.id,
      Utils.handleOptionInput(e.target.value),
      {
        reduxField: "detail"
      }
    );
  };

  handleGoBack = () => {
    this.props.history.goBack();
  };

  handleSaveDesign = () => {
    this.props.updateCampaign(this.props.campaign.detail)
      .then((result) => {

      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const {error, loading, campaignsReducer} = this.props;

    if (error) {
      return (
        <div>{error}</div>
      );
    }

    if (loading) {
      return (
        <Spinner
          show={loading}
          name="detailPageSpinner"/>
      )
    }

    if (campaignsReducer.detail) {
      return (
        <Row className="detail-page">
          <Col xs={{size: 10, offset: 1}} lg={{size: 4, offset: 0}}>
            <CampaignInfo
              title={campaignsReducer.detail.title}
              description={campaignsReducer.detail.description}
              status={campaignsReducer.detail.status}
              submitButtonTitle="Save"
              handleInputChange={this.handleCampaignInfoInputChange}
              handleGoBack={this.handleGoBack}
              handleFormSubmit={this.handleSaveDesign}
            />
          </Col>

          <Col xs={{size: 10, offset: 1}} lg={{size: 8, offset: 0}}>
            <img src={campaignsReducer.detail.canvasDataUrl} alt="canvasDataUrl"/>
          </Col>
        </Row>
      );
    } else {
      return (
        <div>
          Sorry, there is no information about this campaign
        </div>
      )
    }
  }
}

const mapStateToProps = state => ({
  userId: state.authReducer.currentUser._id,
  campaignsReducer: state.campaignsReducer,
  loading: state.campaignsReducer.loading,
  error: state.campaignsReducer.error
});

const mapDispatchToProps = dispatch => (
  {
    handleCampaignInfoInputChange: bindActionCreators(handleCampaignInfoInputChange, dispatch),
    fetchCampaignDetail: bindActionCreators(fetchCampaignDetail, dispatch),
    updateCampaign: bindActionCreators(updateCampaign, dispatch)
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage);

