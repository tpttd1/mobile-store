import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends Component {
    render() {
        return (
            <NavbarMenu >
                <ul>
                    <li className="nav-item ml-5">
                        <Link to="/admin" className="nav-link">
                            List Products
                        </Link>
                    </li>
                    <li className="nav-item ml-5">
                        <Link to="/add" className="nav-link">
                            Add New
                        </Link>
                    </li>
                </ul>
            </NavbarMenu>
        )
    }
}

const NavbarMenu = styled.div`
    background: white !important;
    ul {
        text-decoration: none;
        margin: 0;
        padding: 0;
        height: 500px !important;
    }
    ul li {
        display: block;
        padding: 10px 0;
        margin: 0 !important;
        width: 100%;
        line-height: 2rem;
        color: black;
        text-align: left;
    }
    ul li:hover {
        text-decoration: underline;
        background: var(--mainWhite);
    }
    .active {
        background: var(--mainWhite);
    }

`

export default Navbar;