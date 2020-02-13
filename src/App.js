import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {

  constructor(){
    super()
    this.state = {
      data: 'corgi',
      images: []
    }
  }


  handleChange = (event) => {
    this.setState({
      data: event.target.value
    })
  }

  fetchDogImages = () => {
    axios.get(`https://dog.ceo/api/breed/${this.state.data}/images/random/1`)
    .then(res => {
      console.log(res.data.message)
      this.setState({
        images: res.data.message
      })
    })
  }
  componentDidMount(){
    this.fetchDogImages()
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.data !== this.state.data){
      this.setState({
        images: []
      })
      this.fetchDogImages()
    }
    // this.fetchDogImages()
  }

  render() {
    return (
      <div>
        <h1>DOGGYS</h1>

        <select value={this.state.data} onChange={this.handleChange}>
          <option value="husky">Husky</option>
          <option value="beagle">Beagle</option>
          <option value="corgi">Corgi</option>
        </select>

      <div>
        {this.state.images.map((image, index) =>{
          return <img key={index} src={image} alt="dog"/>
        })}
      </div>
      </div>
    )
  }
}
