import React, {Component} from 'react';
import axios from 'axios';
import {
    Row,
    Col
} from 'reactstrap';

import './DesignPage.css';
import Tools from "../components/DesignPage/Tools";
import Canvas from "../components/DesignPage/Canvas";
import Styles from "../components/DesignPage/Styles";

class DesignPage extends Component {

    state = {
        text: '',
        image: '',
        files: [],
        isUploadingImage: false
    };

    static propTypes = {};

    handleTextChange = e => {
        this.setState({text: e.target.value});
    };

    handleFileDrop = files => {
        this.setState({isUploadingImage: true});
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
                headers: {"X-Requested-With": "XMLHttpRequest"},
            }).then(response => {
                const data = response.data;
                const fileURL = data.secure_url; // You should store this URL for future references in your app
                console.log(data);
                console.log(fileURL);
                this.setState({isUploadingImage: false});
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
            {
                this.state.isUploadingImage && <Row>
                    <Col xs={{size: 10, offset: 1}} lg={{size: 12, offset: 0}} className="uploading-image-container">
                        <p className="sending-image">Sending image</p>
                        <p className="please-wait">Please wait...</p>
                    </Col>
                </Row>
            }

            <Row className="campaign-design-container">
                <Col xs={{size: 10, offset: 1}} lg={{size: 3, offset: 0}}>
                    <Tools
                        files={this.state.files}
                        onTextChange={this.handleTextChange}
                        onFileDrop={this.handleFileDrop}/>
                </Col>
                <Col xs={{size: 10, offset: 1}} lg={{size: 6, offset: 0}}>
                    <Canvas
                        text={this.state.text}
                        image={this.state.image}/>
                </Col>
                <Col xs={{size: 10, offset: 1}} lg={{size: 3, offset: 0}}>
                    <Styles/>
                </Col>
            </Row>
        </div>
    }
}

export default DesignPage;
