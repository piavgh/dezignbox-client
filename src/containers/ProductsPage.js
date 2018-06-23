import React, {Component} from 'react';
import {connect} from "react-redux";
import {
  Row,
  Col
} from 'reactstrap';

import '../css/ProductsPage.css';
import CampaignList from "../components/ProductsPage/CampaignList";
import {fetchCampaigns} from "../redux/actions/campaigns.actions";
import Pagination from "../components/Common/Pagination";

class ProductsPage extends Component {

  state = {
    pageCount: 0,
    perPage: 10,
    currentPage: 1
  };

  componentDidMount() {
    this.props.dispatch(fetchCampaigns(this.props.userId, this.state.currentPage))
      .then((data) => {
        this.setState({
          pageCount: data.extra.pageCount
        })
      });
  }

  handleEditCampaign = (campaignId) => {

  };

  handleDeleteCampaign = (campaignId) => {

  };

  handlePageChange = (pageNumber) => {
    if (pageNumber === this.state.currentPage) {
      return;
    }
    this.props.dispatch(fetchCampaigns(this.props.userId, pageNumber))
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
        <div className="loading-spin-container"><span><i className="fas fa-spinner fa-spin"/></span></div>
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
            handleEditCampaign={this.handleEditCampaign}
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

export default connect(
  mapStateToProps
)(ProductsPage);
