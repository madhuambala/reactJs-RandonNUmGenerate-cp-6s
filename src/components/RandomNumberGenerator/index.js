import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNum = () => {
    const randomNumbers = Math.ceil(Math.random() * 100)
    this.setState({count: randomNumbers})
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="button" type="button" onClick={this.getRandomNum}>
            Generate
          </button>
          <p className="para">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
