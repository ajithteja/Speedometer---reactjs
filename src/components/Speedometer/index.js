import './index.css'
import {Component} from 'react'

class Speedometer extends Component {
  state = {speed: 0}

  onClickAccelarate = () => {
    const {speed} = this.state
    if (speed !== 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  onClickBrake = () => {
    const {speed} = this.state
    if (speed !== 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {speed}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            onClick={this.onClickAccelarate}
            className="button button1"
            type="button"
          >
            Accelerate
          </button>
          <button
            onClick={this.onClickBrake}
            className="button button2"
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
