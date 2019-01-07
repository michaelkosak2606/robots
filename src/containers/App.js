import React, { Component } from 'react';
import './App.css';
import Cardlist from '../components/Cardlist'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import axios from 'axios'
import 'tachyons'

class App extends Component {
  state = {
    robots: [],
    searchField: "",
  }
  async componentDidMount() {
    const response = await axios('https://jsonplaceholder.typicode.com/users')
    const robots = await response.data
    this.setState({
      robots: robots
    })
  }
  onSearchHandler = (event) => {
    this.setState({
      searchField: event.target.value
    })
  }
  render() {
    const { robots, searchField } = this.state
    const filteredRobots = robots.filter(robot => {
      return robot.username.toLowerCase().includes(searchField.toLowerCase())
    })



    return robots.length === 0 ?
      <h1> Loading ...</h1> :
      (
        <div className="tc">
          <h1 className="f2">Search</h1>
          <SearchBox onSearch={this.onSearchHandler} />
          <Scroll>
            <ErrorBoundry>
              <Cardlist robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default App;
