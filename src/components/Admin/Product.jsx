import React, { Component } from 'react';
import { ProductConsumer } from '../../Context';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Product extends Component {
    render() {
        const { id, title, img, price, amount } = this.props.product;
        return (
            <div className="line-product">
                {/* // <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3"> */}
                <ProductConsumer>
                    {(value) => (
                        <ProductContainer onClick={() => value.handleDetail(id)}>
                            <div className="clear-fix">
                                <div className="col-3"><img src={img} alt={title} className="img-product" /></div>
                                <div className="col-3">{title}</div>
                                <div className="col-3">{price}</div>
                                <div className="col-3">{amount}</div>
                                <div className="col-3">
                                    <button className="btn btn-primary">
                                        Edit
                                    </button>
                                    <button className="btn btn-warning">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </ProductContainer>
                    )}
                </ProductConsumer>
                {/* // </ProductWrapper> */}
            </div>
        )
    }
}

Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        img: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};


const ProductContainer = styled.div`
    width: 100% !important;
    margin: 0;
    vertical-align: middle;
    border-bottom: 0.1rem solid #eee;
    &:hover {
        background: #eee;
        // color: var(--mainBlue);
    }
    &:focus {
        outline: none;
    }
    .img-product {
        height: 50px;
    }
    .col-3 {
        width: 20%;
        float: left;
        vertical-align: middle;
        height: 50px;
    }
    .clear-fix::after {
        clear: both;
        content: '';
        display: table;
    }
    .clear-fix {
        padding: 10px 0;
        vertical-align: middle;
        transition: all 0.4s linear;
    }
    .clear-fix:hover {
        background: white;
        // border: 0.04rem solid rgba(0, 0, 0, 0.2);
        box-shadow: 0px 3px 7px 0 rgba(0, 0, 0, 0.2);
    }

`


// const ProductWrapper = styled.div`
//     .card {
//         border-color: transparent;
//         transition: all 0.5s linear;
//     }
//     .card-footer {
//         background: transparent;
//         border-top: transparent;
//         transition: all 0.5s linear;
//     }
//     &:hover {
//         .card {
//             border: 0.04rem solid rgba(0, 0, 0, 0.2);
//             box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
//         }
//         .card-footer {
//             background: rgba(247, 247, 247);
//         }
//     }

// `

export default Product;