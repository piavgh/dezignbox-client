import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';

import "../../css/Spinner.css";
import {spinnerService} from '../../services/spinner.services';

ReactModal.setAppElement('#root');

export default class Spinner extends Component {

  static propTypes = {
    show: PropTypes.bool
  };

  state = {
    show: this.props.hasOwnProperty('show') ? this.props.show : false
  };

  constructor(props) {
    super(props);

    if (this.props.hasOwnProperty('spinnerService')) {
      this.spinnerService = this.props.spinnerService;
    } else {
      this.spinnerService = spinnerService;
    }

    this.spinnerService._register(this);
  }

  componentWillUnmount() {
    this.spinnerService._unregister(this);
  }

  get name() {
    return this.props.name;
  }

  get group() {
    return this.props.group;
  }

  get show() {
    return this.state.show;
  }

  set show(show) {
    this.setState({show});
  }

  render() {
    return (
      <div className="spinner">
        <ReactModal
          className="Spinner__Content"
          overlayClassName="Spinner__Overlay"
          isOpen={this.state.show}
          contentLabel="Minimal Modal Example"
          shouldCloseOnOverlayClick={false}>
          <div className="loader">Loading...</div>
        </ReactModal>
      </div>
    );
  }
}
