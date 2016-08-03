import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header  className="header">
                <a href="#" className="brand">CNode</a>
                <ul className="nav">
                    <li><a href="#">首页  </a> </li>
                    <li><a href="#">新手入门</a></li>
                    <li><a href="#">关于  </a> </li>
                    <li><a href="#">注册  </a> </li>
                    <li><a href="#">登录  </a> </li>
                </ul>
            </header>
        )
    }
}

export default Header;