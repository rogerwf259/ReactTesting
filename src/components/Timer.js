import React, { Component } from 'react';
import Clock from './Clock';
import Controls from './Controls';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      timerStatus: 'stopped'
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
          break;
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  }
  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  }
  handleTimerStart() {
    this.setState({
      timerStatus: 'started'

    });
  }
  handleStatusChange(newStatus) {
    this.setState({
      timerStatus: newStatus
    });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = undefined;
  }
  render() {
    var { timerStatus, count } = this.state;
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count} count={count} />
        <Controls
          countdownStatus={timerStatus} onStatusChange={this.handleStatusChange.bind(this)}
        />
      </div>
    );
  }
}

export default Timer;
