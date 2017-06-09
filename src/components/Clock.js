import React, { Component } from 'react';

class Clock extends Component {
  formatSeconds(totalSeconds) {
    var seconds = totalSeconds % 60;
    var minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    return `${minutes}:${seconds}`;
  }
  static get defaultProps() {
    return {
        totalSeconds: 0
    }
  }
  render() {
    var { totalSeconds } = this.props;
    return (
      <div className="clock">
        <span className="clock-test">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>
    );
  }
}

Clock.propTypes = {
  totalSeconds: React.PropTypes.number
}

export default Clock;
