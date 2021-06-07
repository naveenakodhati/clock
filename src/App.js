import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isClicked: true}

  displayClock = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {isClicked} = this.state
    const buttonElement = isClicked ? 'Show Clock' : 'Hide Clock'

    return (
      <div className="app-container">
        <button
          type="button"
          onClick={this.displayClock}
          className="toggle-button"
        >
          {buttonElement}
        </button>
        {!isClicked && <Clock />}
      </div>
    )
  }
}

export default App
