import React from 'react';
import './Header.scss';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="header__content">
                    <h1>Carlos Muñoz Díaz</h1>
                    <h2>Periodista y desarrollador de aplicaciones web</h2>
                </div>                
            </div>
        );
    }
}