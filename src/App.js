import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import People from './pages/People';
// import { Provider as ReduxProvider } from "react-redux";
// import Store from "./redux/store"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users:[]
    };
  }

  render() {
    return(
      <div>
       
         
          <Route exact path='/' component={Home}/>
          <Route path='/people' component={People}/>
        
        
      </div>
    );
  }
}

export default App;
