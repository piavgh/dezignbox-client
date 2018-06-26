import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {
  Row,
  Col
} from 'reactstrap';

import "../css/DetailPage.css";
import {fetchCampaignDetail} from "../redux/actions/campaigns.actions";
import Spinner from "../components/Common/Spinner";
import CampaignInfo from "../components/DesignPage/CampaignInfo";
import * as CampaignsActionCreators from "../redux/actions/campaigns.actions";
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
    const {error, loading, campaign} = this.props;

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

    if (campaign.detail) {
      return (
        <Row className="detail-page">
          <Col xs={{size: 10, offset: 1}} lg={{size: 4, offset: 0}}>
            <CampaignInfo
              title={campaign.detail.title}
              description={campaign.detail.description}
              status={campaign.detail.status}
              submitButtonTitle="Save"
              handleInputChange={this.handleCampaignInfoInputChange}
              handleGoBack={this.handleGoBack}
              handleFormSubmit={this.handleSaveDesign}
            />
          </Col>

          <Col xs={{size: 10, offset: 1}} lg={{size: 8, offset: 0}}>
            <img src={campaign.detail.canvasDataUrl} alt="canvasDataUrl"/>
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
  userId: state.auth.currentUser._id,
  campaign: state.campaign,
  loading: state.campaign.loading,
  error: state.campaign.error
});

const mapDispatchToProps = dispatch => (
  {
    handleCampaignInfoInputChange: bindActionCreators(CampaignsActionCreators.handleCampaignInfoInputChange, dispatch),
    fetchCampaignDetail: bindActionCreators(fetchCampaignDetail, dispatch),
    updateCampaign: bindActionCreators(CampaignsActionCreators.updateCampaign, dispatch)
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage);

