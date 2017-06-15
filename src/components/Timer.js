import React, { Component } from 'react';
import Clock from './Clock';
import Controls from './Controls';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      timerStatus: 'stop'
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
        case 'start':
          this.startTimer();
          break;
        case 'stop':
          this.setState({count: 0});
        case 'pause':
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
      timerStatus: 'start'

    });
  }
  handleStatusChange(newStatus) {
    if (newStatus === 'start' || newStatus === 'pause'){
      this.setState({
        timerStatus: newStatus
      });
    } else if (newStatus === 'stop') {
      this.setState({
        timerStatus: newStatus,
        count: 0
      });
    }

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
        <Clock totalSeconds={count} />
        <Controls
          countdownStatus={timerStatus} onStatusChange={this.handleStatusChange.bind(this)}
          count={count}
        />
      </div>
    );
  }
}

export default Timer;
