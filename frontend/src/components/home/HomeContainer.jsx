import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'antd'

class HomeContainer extends Component {
  render() {
    return (
      <div className="home">
        <h1>Welcome to my cozy page</h1>
        <Link to="/characters">
          <Button type="ghost">Lets find out magic!</Button>
        </Link>
        <Link to="/episodes">
          <Button type="ghost">Lets find out episodes!</Button>
        </Link>
      </div>
    )
  }
}

export default HomeContainer
