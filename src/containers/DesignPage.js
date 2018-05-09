import React, {Component} from 'react';
import axios from 'axios';
import {
    Row,
    Col
} from 'reactstrap';

import Tools from "../components/DesignPage/Tools";
import Canvas from "../components/DesignPage/Canvas";
import Styles from "../components/DesignPage/Styles";

class DesignPage extends Component {

    state = {
        text: '',
        image: '',
        files: []
    };

    static propTypes = {};

    handleTextChange = e => {
        this.setState({text: e.target.value});
    };

    handleFileDrop = files => {
        const uploaders = files.map(file => {
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `dezignbox`);
            formData.append("upload_preset", "ltvpxyqw"); // Replace the preset name with your own
            formData.append("api_key", "285863254151261"); // Replace API key with your own Cloudinary key
            formData.append("timestamp", (Date.now() / 1000) | 0);

            // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
            return axios.post("https://api.cloudinary.com/v1_1/dezignbox/image/upload", formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                const fileURL = data.secure_url; // You should store this URL for future references in your app
                console.log(data);
                console.log(fileURL);
            })
        });

        // Once all the files are uploaded
        axios.all(uploaders).then(() => {
            // ... perform after upload is successful operation
            this.setState({
                files,
                image: files[0].preview
            });
        });
    };

    render() {
        return <div>
            <Row>
                <Col xs={12}>

                </Col>
            </Row>
            <Row>
                <Col xs={12} lg={3}>
                    <Tools
                        files={this.state.files}
                        onTextChange={this.handleTextChange}
                        onFileDrop={this.handleFileDrop}/>
                </Col>
                <Col xs={12} lg={6}>
                    <Canvas
                        text={this.state.text}
                        image={this.state.image}/>
                </Col>
                <Col xs={12} lg={3}>
                    <Styles/>
                </Col>
            </Row>
        </div>
    }
}

export default DesignPage;
