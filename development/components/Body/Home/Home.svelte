import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

export class Home extends Component {
    render() {
        return (
            <div className="container">
                <h2>Home</h2>
                <Link to="/articulo-1">Artículo 1</Link>
                <Link to="/articulo-2">Artículo 2</Link>
            </div>
        );
    }
}