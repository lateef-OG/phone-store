import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {Button} from './Button';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to="/">
                <img src={logo} alt="" className="navbar-brand"/>
            </Link>
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-5">
                    <Link to="/" className="nav-link">
                        Products
                    </Link>
                </li>
            </ul>
            <Link to="/cart" className="ml-auto">
                <Button>
                    <i className="fa fa-cart-plus mr-2"></i>
                    my cart
                </Button>
            </Link>
        </Nav>
      </div>
    )
  }
}

const Nav = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`