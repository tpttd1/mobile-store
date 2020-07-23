import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../Context';

class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"></Title>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map((product, index) => {
                                        return <Product key={index} product={product}/>  
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map((product, index) => {
                                        return <Product key={index} product={product}/>  
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>  
        )
    }
}

export default ProductList;