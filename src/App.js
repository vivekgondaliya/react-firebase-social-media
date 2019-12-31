import React, { Component } from "react";
import { Route, Switch, Redirect } from 'react-router-dom';

import TopNavigation from './components/TopNavigation';
import ContentContainer from "./components/ContentContainer";
import About from './components/About';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import WeatherDetailedInfo from './components/WeatherDetailedInfo';
import WeatherTypes from './components/WeatherType';
import LoginForm from './components/Login';

class App extends Component {
    render() {
        return (
            <div>
                <TopNavigation />
                <Switch>
                    <Route exact path="/" component={LoginForm} />
                    <PrivateRoute path="/home">
                        <ContentContainer />
                    </PrivateRoute>
                    <PrivateRoute path="/weather">
                        <WeatherTypes />
                    </PrivateRoute>
                    <PrivateRoute path="/about">
                        <About />
                    </PrivateRoute>
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App;

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
    const user_isAuthenticated = true;
    return (
      <Route
        {...rest}
        render={({ location }) =>
        user_isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
}