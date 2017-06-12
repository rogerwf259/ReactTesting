import React, { Component } from 'react';

class Controls extends Component {
  returnStartStopButton(countdownStatus) {
    if (countdownStatus === 'started'){
      return (
        <button
          className="button secondary" onClick={this.onStatusChange('paused')}
        >
          Pause
        </button>
      );
    } else if (countdownStatus === 'paused') {
      return (
        <button
          className="button primary"
          onClick={this.onStatusChange('started')}
        >
          Start
        </button>
      );
    }
  }
  onStatusChange(newStatus) {
    return  () => {
      this.props.onStatusChange(newStatus)
    }
  }
  render() {
    var { countdownStatus } = this.props;
    return (
      <div className="controls">
        {this.returnStartStopButton(countdownStatus)}
        <button
          className="button alert hollow" onClick={this.onStatusChange('stopped')}
        >Clear</button>
      </div>
    );
  }
}

Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired
}
export default Controls;
