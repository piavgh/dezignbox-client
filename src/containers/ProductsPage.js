import React, {Component} from 'react';
import {connect} from "react-redux";
import {
    Row,
    Col
} from 'reactstrap';

import '../css/ProductsPage.css';
import CampaignList from "../components/ProductsPage/CampaignList";
import {fetchCampaigns} from "../redux/actions/campaigns.actions";

class ProductsPage extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCampaigns(this.props.userId));
    }

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
                    <CampaignList campaigns={campaigns}/>
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
