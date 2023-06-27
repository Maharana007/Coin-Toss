// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {toss: 0, total: 0, heads: 0, tails: 0}

  tossTheCoin = () => {
    const {toss} = this.state
    this.setState({toss: Math.floor(Math.random() * 2)})
    this.setState(pervState => ({total: pervState.total + 1}))
    if (toss === 0) {
      this.setState(pervState => ({heads: pervState.heads + 1}))
    } else {
      this.setState(pervState => ({tails: pervState.tails + 1}))
    }
  }

  render() {
    const {toss, total, heads, tails} = this.state

    return (
      <div className="container">
        <div className="coin-card">
          <h1 className="title">Coin Toss Game</h1>
          <p className="details"> Heads (or) Tails</p>
          <img
            src={
              toss === 0
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            className="image"
            alt="toss result"
          />
          <button type="button" className="button" onClick={this.tossTheCoin}>
            {' '}
            Toss Coin
          </button>
          {/* <p className="count">toss:{toss}</p> */}
          <div className="count-list">
            <p className="count">Total: {total}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
