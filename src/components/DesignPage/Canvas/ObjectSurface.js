import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ObjectSurface extends Component {

  constructor(props) {
    super(props);
    this.boxSurface = React.createRef();
  }

  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="object-surface">
        <img src={this.props.src}
             alt="object-surface"
             ref={this.boxSurface}
             width={this.props.width}
             height={this.props.height}/>
      </div>
    );
  }
}
