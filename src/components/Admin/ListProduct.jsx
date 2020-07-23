import React, { Component } from 'react';
import { ProductConsumer } from '../../Context';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Product from './Product';
import "../../index.css"


class ListProduct extends Component {
    render() {
        return (
            <section>
                <React.Fragment>
                    <ProductContainer>
                        <div className="clear-fix">
                            <div className="col-3">Image</div>
                            <div className="col-3">Title</div>
                            <div className="col-3">Price ($)</div>
                            <div className="col-3">Amount</div>
                            <div className="col-3">Action</div>
                        </div>
                    </ProductContainer>
                    <ProductConsumer>
                        {value => {
                            return value.products.map((product, index) => {
                                return <Product key={index} product={product} />
                            })
                        }}
                    </ProductConsumer>
                </React.Fragment>
            </section>

        )
    }
}

const ProductContainer = styled.div`
    width: 100% !important;
    padding: 25px 0;
    // background: #999;
    color: black;
    border-bottom: 0.01rem solid #999;
    .col-3 {
        width: 20%;
        float: left;
    }
    .clear-fix::after {
        clear: both;
        content: '';
        display: table;
    }

`

export default ListProduct;