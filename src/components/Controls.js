import React, { Component } from 'react';

class Controls extends Component {
  constructor(props) {
    super(props);

    this.timerOrCountdown = this.timerOrCountdown.bind(this);
  }
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
  returnTimerControls(count, countdownStatus) {
    if (count === 0 || countdownStatus === 'pause') {
      return (
        <button
          className="button primary"
          onClick={this.onStatusChange('start')}
        >
          Start
        </button>
      );
    } else if (count !== 0 || countdownStatus === 'start') {
        return (
          <button
            className="button secondary" onClick={this.onStatusChange('pause')}
          >
            Pause
          </button>
        );
    }
  }
  onStatusChange(newStatus) {
    return  () => {
      this.props.onStatusChange(newStatus)
    }
  }
  timerOrCountdown(count, countdownStatus, self) {
    if (countdownStatus === 'stop' || countdownStatus === 'start' || countdownStatus === 'pause') {
      return (
        <div>
          {self.returnTimerControls(count, countdownStatus)}
          <button
            className="button alert hollow" onClick={this.onStatusChange('stop')}
          >Clear</button>
        </div>
      );
    } else if (countdownStatus === 'stopped' || countdownStatus === 'started' || countdownStatus === 'paused'){
      return (
        <div>
        {self.returnStartStopButton(countdownStatus)}
          <button
            className="button alert hollow" onClick={this.onStatusChange('stopped')}
          >Clear</button>
        </div>
      );
    }
  }
  render() {
    var { countdownStatus, count } = this.props;
    var self = this;
    return (
      <div className="controls">
        {this.timerOrCountdown(count, countdownStatus, self)}
      </div>
    );
  }
}


Controls.propTypes = {
  countdownStatus: React.PropTypes.string.isRequired,
  onStatusChange: React.PropTypes.func.isRequired,
  count: React.PropTypes.number
}
export default Controls;
