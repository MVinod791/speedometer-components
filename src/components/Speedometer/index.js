// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  AccelerateSpeed = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(preValue => ({speed: preValue.speed + 10}))
    }
  }

  ApplyBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(preValue => ({speed: preValue.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png "
          alt="speedometer"
          className="speed-test-image"
        />
        <h1 className="show-speed">Speed is {speed}mph</h1>
        <p className="instruction">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            className="button acceleration-button"
            type="button"
            onClick={this.AccelerateSpeed}
          >
            Accelerate
          </button>
          <button
            className="button break-button"
            type="button"
            onClick={this.ApplyBreak}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
