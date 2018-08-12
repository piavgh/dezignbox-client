import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from 'redux';
import {
  Row,
  Col
} from 'reactstrap';

import '../components/ProductsPage/ProductsPage.css';
import CampaignList from "../components/ProductsPage/CampaignList";
import {fetchCampaigns} from "../redux/actions/campaigns.actions";
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
          pageCount: data.value.data.extra.pageCount
        })
      });
  }

  handlePageChange = (pageNumber) => {
    if (pageNumber === this.state.currentPage) {
      return;
    }
    this.props.fetchCampaigns(this.props.userId, pageNumber)
      .then((data) => {
        this.setState({
          pageCount: data.value.data.extra.pageCount,
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
            campaigns={campaigns}/>
          <Pagination
            show={campaigns.length > 0}
            pageCount={this.state.pageCount}
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}/>
        </Col>
      </Row>
    );
  }

}

const mapStateToProps = state => ({
  userId: state.authReducer.currentUser._id,
  campaigns: state.campaignsReducer.items,
  loading: state.campaignsReducer.loading,
  error: state.campaignsReducer.error
});

const mapDispatchToProps = dispatch => (
  {
    fetchCampaigns: bindActionCreators(fetchCampaigns, dispatch)
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
