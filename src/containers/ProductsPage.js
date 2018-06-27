import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {
  Row,
  Col
} from 'reactstrap';

import '../css/ProductsPage.css';
import CampaignList from "../components/ProductsPage/CampaignList";
import {fetchCampaigns, deleteCampaign} from "../redux/actions/campaigns.actions";
import Pagination from "../components/Common/Pagination";
import Spinner from "../components/Common/Spinner";

class ProductsPage extends Component {

  state = {
    pageCount: 0,
    perPage: 10,
    currentPage: 1
  };

  componentDidMount() {
    this.props.fetchCampaigns(this.props.userId, this.state.currentPage)
      .then((data) => {
        this.setState({
          pageCount: data.extra.pageCount
        })
      });
  }

  handleDeleteCampaign = (campaignId) => {
    this.props.deleteCampaign(campaignId)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      })
  };

  handlePageChange = (pageNumber) => {
    if (pageNumber === this.state.currentPage) {
      return;
    }
    this.props.fetchCampaigns(this.props.userId, pageNumber)
      .then((data) => {
        this.setState({
          pageCount: data.extra.pageCount,
          currentPage: pageNumber
        })
      });
  };

  render() {
    const {error, loading, campaigns} = this.props;

    if (error) {
      return (
        <div>{error}</div>
      );
    }

    if (loading) {
      return (
        <Spinner
          show={loading}
          name="productsPageSpinner"/>
      )
    }

    return (
      <Row className="products-page">
        <Col xs={2}>

        </Col>
        <Col xs={10}>
          <h1>Products</h1>
          <CampaignList
            campaigns={campaigns}
            handleDeleteCampaign={this.handleDeleteCampaign}
          />
          <Pagination
            pageCount={this.state.pageCount}
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}/>
        </Col>
      </Row>
    );
  }

}

const mapStateToProps = state => ({
  userId: state.auth.currentUser._id,
  campaigns: state.campaign.items,
  loading: state.campaign.loading,
  error: state.campaign.error
});

const mapDispatchToProps = dispatch => (
  {
    fetchCampaigns: bindActionCreators(fetchCampaigns, dispatch),
    deleteCampaign: bindActionCreators(deleteCampaign, dispatch)
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
