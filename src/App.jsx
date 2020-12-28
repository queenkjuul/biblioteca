import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;