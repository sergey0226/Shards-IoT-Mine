import React, { Component } from "react";

class Success extends Component {
  render() {
    return (
      <div style={{ width: 250 }}>
        <div className="mt-3 color-main">Successful</div>
        <p className="font-light font-13 secondary mb-4">
          Your password has been reset!
        </p>
        <button onClick={this.props.onComplete} className="hover-opacity">
          Done
        </button>
      </div>
    );
  }
}

export default Success;
