import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Home } from '../components/Body/Home/Home';
import { Article } from '../components/Body/Articles/Article';

export default class Main extends Component {
    render() {
        return (
            <>
                <Header />
                <BrowserRouter>
                    <>
                    <Switch>
                        <Route path="/" component={Home} />
                        <Route path="/articulo-1" component={Article}/>
                    </Switch>
                    </>
                </BrowserRouter>
                <Footer />
            </>
        );
    }
}