import React, {Component} from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import '../css/ProductsPage.css';
import CampaignList from "../components/ProductsPage/CampaignList";

class ProductsPage extends Component {

    campaigns = [
        {
            id: 1,
            title: 'Test 1',
            image: 'https://i.ytimg.com/vi/bx7BjjqHf2U/maxresdefault.jpg',
            status: true
        },
        {
            id: 2,
            title: 'Test 2',
            image: 'http://www.dogbazar.org/wp-content/uploads/2013/09/beagle-2.jpg',
            status: true
        },
        {
            id: 3,
            title: 'Test 3',
            image: 'https://d2mzr2c3wiwtyo.cloudfront.net/imagecache/landing_wide_photo/img/breeds/beagle/beagle-puppy-playing-on-the-new-kuranda-dog-bed.jpg',
            status: false
        }
    ];

    render() {
        return (
            <Row className="products-page">
                <Col xs={2}>

                </Col>
                <Col xs={10}>
                    <h1>Products</h1>
                    <CampaignList campaigns={this.campaigns}/>
                </Col>
            </Row>
        );
    }

}

export default ProductsPage;
