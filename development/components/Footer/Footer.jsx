import React, { Component } from 'react';
import './css/Footer.scss';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer__content">
                    <a href="https://twitter.com/CarlosMunozDiaz" target="_blank" className="fa fa-twitter"></a>
                    <a href="https://www.linkedin.com/in/carlos-mu%C3%B1oz-d%C3%ADaz-763a9946/" target="_blank" className="fa fa-linkedin"></a>
                    <a href="https://www.facebook.com/carlos.getafense/" target="_blank" className="fa fa-facebook"></a>
                    <a href="mailto:carlos10md@gmail.com" target="_blank" className="fa fa-envelope"></a>
                    <a href="https://api.whatsapp.com/send?phone=+34628258170" target="_blank" className="fa fa-whatsapp"></a>
                </div>                
            </div>
        );
    }
}