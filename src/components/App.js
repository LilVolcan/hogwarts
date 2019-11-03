import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';


class App extends Component {

  state = {
    hogs: hogs, 
    greaseFilter: false,
    weightFilter: false,
    nameFilter: false
  }

  filteredHogs = () => { //filters what to send to HogContainer to render based on criteria
    if (this.state.greaseFilter) {
      return this.state.hogs.filter(hog => hog.greased)
    } else if (this.state.weightFilter) {
      return this.state.hogs.sort((a,b) => a.weight - b.weight)
    } else if (this.state.nameFilter) {
      return (this.state.hogs.sort((a, b) => a.name.localeCompare(b.name)))
    } else {
      return this.state.hogs 
    }

  }

  handleWeightClick = () => { // forces a sort by weight
    this.setState({
      greaseFilter: false,
      weightFilter: !this.state.weightFilter,
      nameFilter: false
    })
    this.filteredHogs();
  }

  handleNameClick = () => { // forces a sort by name
    this.setState({
      greaseFilter: false,
      weightFilter: false,
      nameFilter: !this.state.nameFilter
    })
    this.filteredHogs();
  }

  handleGreaseClick = () => { //forces to filter the greasy pigs
    this.setState({
      greaseFilter: !this.state.greaseFilter,
      weightFilter: false,
      nameFilter: false
    })
    this.filteredHogs();
  }

  render() {
    // console.log(this.state.hogs)
    return (
      <div className="App">
          < Nav filterGreased={this.handleGreaseClick} sortName={this.handleNameClick} sortWeight={this.handleWeightClick}/>
          < HogContainer hogs={this.filteredHogs()}/>
      </div>
    )
  }
}

export default App;
