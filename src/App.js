import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route} from 'react-router-dom';
import { history } from './_helpers'
import { SignUp } from './signup/signup.components';
import { Signin } from './signin/signin.components';
import { PrivateRoute } from './_components';
import { Home } from './home/';


class App extends Component {
  render() {
    return (
      <div className="App">
          <Router history={history}>
            <div>
                <Switch>
                  <PrivateRoute exact path='/home' component={Home} />
                  <Route excat path='/signup' component={SignUp} />
                  <Route excat path='/signin' component={Signin} />
                  {/* <Route exact path='/' component={Registration} /> */}
                </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
