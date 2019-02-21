import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <NavLink exact to="/"
                activeClassName="nav-link-active">Home</NavLink>

                <NavLink to="/about"
                activeClassName="nav-link-active">About</NavLink>
                
                <NavLink to="/contact"
                activeClassName="nav-link-active">Contact</NavLink>
                
                <NavLink to="/counter"
                activeClassName="nav-link-active">Counter</NavLink>
            </div>
        );
    }
};