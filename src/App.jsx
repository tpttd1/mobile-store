import React, { Component } from 'react';
// import logo from './logo.svg';

import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import AddProduct from './components/Admin/AddProduct';
import Modal from './components/Modal';
import Admin from './components/Admin/Admin';
import Cart from './components/Cart/Cart';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Switch>
                    <Route exact path="/" component={ProductList}/>
                    <Route path="/details" component={Details}/>
                    <Route path="/add" component={AddProduct}/>
                    <Route path="/shopping" component={Cart}/>
                    <Route path="/admin" component={Admin}/>
                    <Route component={Default}/>
                </Switch>
                <Modal />
            </React.Fragment>
        )
    }
}

export default App;