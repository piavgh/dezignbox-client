import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import {Button} from 'reactstrap';

import '../../css/ConfirmBox.css';

ReactModal.setAppElement('#root');

export default class ConfirmBox extends Component {

  static propTypes = {
    show: PropTypes.bool.isRequired,
    className: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired,
    bodyText: PropTypes.string.isRequired,
    confirmButtonLabel: PropTypes.string.isRequired,
    cancelButtonLabel: PropTypes.string.isRequired,
    handleConfirmAction: PropTypes.func.isRequired,
    handleCancelAction: PropTypes.func.isRequired
  };

  render() {
    return ( // TODO: Need to style these css className
      <ReactModal
        className="ConfirmBox__Content"
        overlayClassName="ConfirmBox__Overlay"
        isOpen={this.props.show}
        contentLabel="Minimal Modal Example"
        shouldCloseOnOverlayClick={false}>

        <div className={this.props.className}>
          <div className="confirm-modal-header">
            <p>{this.props.headerText}</p>
          </div>

          <div className="confirm-modal-body">
            <p>{this.props.bodyText}</p>
          </div>

          <div className="confirm-modal-footer">
            <Button
              outline
              onClick={this.props.handleCancelAction}>
              {this.props.cancelButtonLabel}
            </Button>

            <Button
              outline
              color="danger"
              onClick={this.props.handleConfirmAction}>
              {this.props.confirmButtonLabel}
            </Button>
          </div>
        </div>

      </ReactModal>
    )
  }
}
