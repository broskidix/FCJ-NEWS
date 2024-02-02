import React, { Fragment, Component } from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {

  constructor(){
    super();
    this.state = {
      query : false,
      queryString : "",
      apiKey : process.env.REACT_APP_API_KEY,
      progress : 0,
    }
  }

  HandleSearchBtn = (text) => {
    this.setState({
      query : true,
      queryString : text,
    })
  }

  HandleCategory = () => {
    console.log("Category")
    this.setState({
      query : false,
    })
  }

  HandlePorgress = (num) => {
    this.setState({
      progress : num,
    })
  }

  render() {
    return (
      <div>
        <Router>
          <Fragment>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            onLoaderFinished={() => this.setState({progress : 0})}
          />
            <Navbar HandleSearchBtn = {this.HandleSearchBtn} HandleCategory = {this.HandleCategory}/>
            {this.state.query?<News ApiKey = {this.state.apiKey} key = "search" searchStatement = {this.state.queryString} progress = {this.HandlePorgress} query={this.state.query} pageSize = {20} category="technology" country="in" /> :
            <Routes>
              <Route  exact path='/' element={<News ApiKey = {this.state.apiKey} key = "home"  progress = {this.HandlePorgress} query={this.state.query} pageSize = {15} category="general" country="in" /> } />
              <Route  exact path='/business' element={<News ApiKey = {this.state.apiKey} key = "business"  progress = {this.HandlePorgress} query={this.state.query} pageSize = {15} category="business" country="in" /> } />
              <Route  exact path='/entertainment' element={<News ApiKey = {this.state.apiKey} key = "entertainment"  progress = {this.HandlePorgress} query={this.state.query} pageSize = {15} category="entertainment" country="in" /> } />
              <Route  exact path='/general' element={<News ApiKey = {this.state.apiKey} key = "general"  progress = {this.HandlePorgress} query={this.state.query} pageSize = {15} category="general" country="in" /> } />
              <Route  exact path='/health' element={<News ApiKey = {this.state.apiKey} key = "health"  progress = {this.HandlePorgress} query={this.state.query} pageSize = {15} category="health" country="in" /> } />
              <Route  exact path='/science' element={<News ApiKey = {this.state.apiKey} key = "science"  progress = {this.HandlePorgress} query={this.state.query} pageSize = {15} category="science" country="in" /> } />
              <Route  exact path='/sports' element={<News ApiKey = {this.state.apiKey} key = "sports" progress = {this.HandlePorgress} query={this.state.query} pageSize = {15} category="sports" country="in" /> } />
              <Route  exact path='/technology' element={<News ApiKey = {this.state.apiKey} key = "technology"  progress = {this.HandlePorgress} query={this.state.query} pageSize = {15} category="technology" country="in" /> } />
              {/* <Route  exact path= {`/${this.state.queryString}`} element={} /> */}
            </Routes>}
          </Fragment>
        </Router>
      </div>
    )
  }
}
