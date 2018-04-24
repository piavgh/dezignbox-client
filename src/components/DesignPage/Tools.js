import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Row,
    Col,
    FormGroup,
    Label
} from 'reactstrap';
import classnames from 'classnames';
import Dropzone from 'react-dropzone';

class Tools extends Component {
    state = {
        activeTab: '1'
    };

    toggle = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };

    render() {
        return <Row>
            <Col xs={12}>
                <div>
                    <Nav tabs justified>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '1'})}
                                onClick={() => {
                                    this.toggle('1');
                                }}
                            >
                                Text
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={classnames({active: this.state.activeTab === '2'})}
                                onClick={() => {
                                    this.toggle('2');
                                }}
                            >
                                Art
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <TabContent activeTab={this.state.activeTab}>
                        <TabPane tabId="1">
                            <Row>
                                <Col sm="12">
                                    <FormGroup>
                                        <Label for={"custom-text"}>Enter text below</Label>
                                        <textarea
                                            className={"form-control"}
                                            id={"custom-text"}
                                            onChange={this.props.onTextChange}/>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for={"font-select"}>Choose a font</Label>

                                    </FormGroup>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tabId="2">
                            <Row>
                                <Col sm="12">
                                    <FormGroup>
                                        <div className="dropzone-container">
                                            <Dropzone onDrop={this.props.onFileDrop}
                                                      multiple={false}>
                                                <p>Drop a design here, or click to select design to upload.</p>
                                            </Dropzone>
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </TabPane>
                    </TabContent>
                </div>
            </Col>
        </Row>;
    }
}

Tools.propTypes = {
    files: PropTypes.array.isRequired,
    onTextChange: PropTypes.func.isRequired,
    onFileDrop: PropTypes.func.isRequired
};

export default Tools;
