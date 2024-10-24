import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    TossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
    Total: 0,
    Heads: 0,
    Tails: 0,
  }

  onClickButton = () => {
    const {Total, Heads, Tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState({
        TossImage: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        Heads: Heads + 1,
        Total: Total + 1,
      })
    } else {
      this.setState({
        TossImage: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        Tails: Tails + 1,
        Total: Total + 1,
      })
    }
  }

  render() {
    const {TossImage, Total, Tails, Heads} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={TossImage} className="toss-image" alt="toss result" />
          <button className="button" type="button" onClick={this.onClickButton}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {Total}</p>
            <p className="count">Heads: {Heads}</p>
            <p className="count">Tails: {Tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
