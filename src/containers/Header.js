import React, { Component } from 'react';

import styles from './../assets/css/Header.css';
import logo from './../assets/images/logo.png';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <nav>
                <ul className={styles.links}>
                    <li><a href="/"><img src={logo} /></a></li>
                    <li><a href="/" className={styles.active}>Feed</a></li>
                    <li><a href="/">Groups</a></li>
                    <li><a href="/">Activity</a></li>
                    <li><input type="text" placeholder="Search" /></li>
                    <li><a href="/"><img src={logo}></img></a></li>
                    <li><button >Logout</button></li>
                </ul>
            </nav>
        );
    }
}