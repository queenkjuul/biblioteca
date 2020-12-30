import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddBook from './components/AddBook';
import Bookshelf from './components/Bookshelf';
import Details from './components/Details';
import EditBook from './components/EditBook';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <Router>
            <Header />
            <main className="grid">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/bookshelf">
                        <Bookshelf />
                    </Route>
                    <Route path="/add">
                        <AddBook />
                    </Route>
                    <Route path="/edit">
                        <EditBook />
                    </Route>
                    <Route path="/details/:id">
                        <Details />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </main>
            <Footer />
        </Router>
    )
}

export default App;