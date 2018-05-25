import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Row, Col, Button, Form, FormGroup, Label, Input} from 'reactstrap';

class CampaignDetail extends Component {

    static propTypes = {
        createCampaign: PropTypes.func.isRequired,
        handleInputChange: PropTypes.func.isRequired
    };

    onChange = (e) => {
        this.props.handleInputChange(e);
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return <Row>
            <Col xs={12}>
                <Form onSubmit={this.handleFormSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Enter campaign title"
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            placeholder="Enter your description"
                            onChange={this.onChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="status">Status</Label>
                        <Input
                            type="select"
                            name="status"
                            id="status"
                            onChange={this.onChange}
                        >
                            <option value={true}>Active</option>
                            <option value={false}>Inactive</option>
                        </Input>
                    </FormGroup>
                    <div className="campaign-detail-buttons-container">
                        <Link to="/start-design/design" className="btn btn-secondary button-back">Back</Link>
                        <Button className="btn btn-success button-submit">Finalize Design</Button>
                    </div>
                </Form>
            </Col>
        </Row>
    }
}

export default CampaignDetail;
