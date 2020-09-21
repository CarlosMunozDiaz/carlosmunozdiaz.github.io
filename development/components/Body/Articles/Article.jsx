import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Article extends Component {
    render() {
        return (
            <>
                <h2>Artículo</h2>
                <Link to="/">Volver a Home</Link>
            </>
        );
    }
}