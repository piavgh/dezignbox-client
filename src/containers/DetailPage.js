import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {
  Row,
  Col
} from 'reactstrap';

import {fetchCampaignDetail} from "../redux/actions/campaigns.actions";
import Spinner from "../components/Common/Spinner";

class DetailPage extends Component {

  componentDidMount() {
    this.props.fetchCampaignDetail(this.props.match.params.id).then((data) => {
      console.log(data);
    });
  }

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

    return (
      <Row className="detail-page">
        <Col xs={2}>

        </Col>

        {
          campaign &&
          <Col xs={10}>
            {campaign.title}
            {campaign.description}
            {campaign.status}
            <img src={campaign.canvasDataUrl}/>
            <img src={campaign.originalImageUrl}/>
            <img src={campaign.thumbnailImageUrl}/>
          </Col>
        }
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  userId: state.auth.currentUser._id,
  campaign: state.campaign.detail,
  loading: state.campaign.loading,
  error: state.campaign.error
});

const mapDispatchToProps = dispatch => (
  {
    fetchCampaignDetail: bindActionCreators(fetchCampaignDetail, dispatch),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPage);

