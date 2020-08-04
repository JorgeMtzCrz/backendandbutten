import React, { Component } from 'react'
import axios from 'axios'
import { Card, Button } from 'antd'
import { Link } from 'react-router-dom'

class EpisodesAll extends Component {
  state = {
    episodes: []
  }

  componentDidMount() {
    axios
      .get('http://localhost:3000/episodes')
      .then(({ data: { episodes } }) => {
        this.setState({ episodes })
      })
      .catch(err => {
        console.log('vuelve a tomar el bootcamp.... dónde están mis TAs')
      })
  }

  render() {
    const { episodes } = this.state
    return (
      <div style={{ display: 'flex', width: '100vw', height: '100vh' }}>
        {episodes.map((episode, i) => (
          <Card key={i} style={{ width: '25vw', height: '500px' }} title={episode.title}>
            <p>Season: {episode.season}</p>
            <p>Episode Number: {episode.episode_number}</p>
            <p>US Air Date: {episode.US_airdate}</p>
            <Link to={`/characters/${episode.title}`}>
              <Button>See details</Button>
            </Link>
          </Card>
        ))}
      </div>
    )
  }
}

export default EpisodesAll
