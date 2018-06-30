import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {
  Row,
  Col
} from 'reactstrap';

import "../css/CampaignDetailPage.css";
import {
  deleteCampaign,
  fetchCampaignDetail,
  handleCampaignInfoInputChange,
  updateCampaign
} from "../redux/actions/campaigns.actions";
import Spinner from "../components/Common/Spinner";
import CampaignInfo from "../components/DesignPage/CampaignInfo";
import Utils from "../helpers/utils";
import {setAlertSuccess, setAlertError} from "../redux/actions/alert.actions";
import DeleteButton from "../components/CampaignDetailPage/DeleteButton";
import ConfirmBox from "../components/Common/ConfirmBox";

class CampaignDetailPage extends Component {

  state = {
    showModal: false
  };

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

  handleDeleteCampaign = (campaignId) => {
    this.props.deleteCampaign(campaignId)
      .then((response) => {
        this.props.history.push('/products');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleSaveDesign = () => {
    this.props.updateCampaign(this.props.campaignsReducer.detail)
      .then((result) => {
        this.props.setAlertSuccess('Your campaign is saved.');
      })
      .catch((err) => {
        console.log(err);
        this.props.setAlertError(err);
      });
  };

  handleOpenModal = () => {
    this.setState({showModal: true});
  };

  handleCloseModal = () => {
    this.setState({showModal: false});
  };

  handleConfirmDelete = () => {
    this.handleDeleteCampaign(this.props.campaignsReducer.detail._id)
  };

  handleCancelDelete = () => {
    this.handleCloseModal();
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
        <div>
          <ConfirmBox
            show={this.state.showModal}
            className="delete-campaign-confirm-modal"
            headerText={"Delete campaign " + campaignsReducer.detail.title}
            bodyText="This action can not be undone. Are you sure?"
            confirmButtonLabel="I know"
            cancelButtonLabel="Cancel"
            handleConfirmAction={this.handleConfirmDelete}
            handleCancelAction={this.handleCancelDelete}
          />
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
              <DeleteButton
                handleClick={this.handleOpenModal}/>
            </Col>

            <Col xs={{size: 10, offset: 1}} lg={{size: 8, offset: 0}}>
              <img src={campaignsReducer.detail.canvasDataUrl} alt="canvasDataUrl"/>
            </Col>
          </Row>
        </div>
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
    updateCampaign: bindActionCreators(updateCampaign, dispatch),
    deleteCampaign: bindActionCreators(deleteCampaign, dispatch),
    setAlertSuccess: bindActionCreators(setAlertSuccess, dispatch),
    setAlertError: bindActionCreators(setAlertError, dispatch)
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CampaignDetailPage);

