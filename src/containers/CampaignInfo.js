import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {
    Row,
    Col
} from 'reactstrap';

class CampaignDetail extends Component {

    render() {
        return <Row>
            <Col xs={12}>

            </Col>
            <Col xs={12}>
                <Link to="/start-design/design" className="btn btn-success button-back">Back</Link>
            </Col>
        </Row>
    }
}

export default CampaignDetail;
