import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';


class App extends React.Component {

  render() {
    console.log('app', this.props);
    const { isAuthenticated } = this.props.auth0;
    return(
      <>
        <Router>
            <Header />
            {!isAuthenticated &&
            <Login/>
  }
  
            <Switch>
            {isAuthenticated &&
                 <Route exact path="/">
                 <Home/>
                      </Route>
             }
                     {isAuthenticated &&
              <Route exact path="/favFruit">
 
              </Route>
              }
            </Switch>
            <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
