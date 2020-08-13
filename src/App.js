import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Nav from './components/Nav/desktop-nav/Nav';
import Menu from './pages/menu/Menu';
import Home from "./pages/Home/Home";
import './App.css';
import AddNewDish from './pages/new-dish/AddNewDish';

class App extends Component {
  constructor () {
    super()
    this.state = {
      data: []
     
    }

  }

    componentDidMount()  {
      axios
        .get(`http://localhost:8080/`)
        .then(res => {
          console.log(res, 'response')
          this.setState({
            data: res.data.dishData
          })
        })
        .catch(err => {
          console.log(err)
        })
  }

  createDish = (data) => {
    axios.post('http://localhost:8080/add-new-dish', data)
    .then(res => {
      console.log(res.data)
      if(res.status === 200) {
        axios.get('http://localhost:8080/')
        .then(res => {this.setState({
          data: res.data.dishData
        })})
      }
    })
      .catch(err=> console.log(err))
      
  }
  
 
  render() {
   console.log(this.state.data, 'looking for state')
    return (
      <div className="App">
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
         <Route
            exact path ='/menu'
            render={props =>
              <Menu
                {...props}
                dishes={this.state.data}
                
              />
            }
          />

          <Route
            exact path ='/add-new-dish'
            render={props =>
              <AddNewDish
                {...props}
                dishes={this.state.data}
                createDish={this.createDish}
              />
            }
          />
          </Switch>
      </div>
    )
  }
}

export default App;
