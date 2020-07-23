import React, { Component } from 'react';
import Title from '../Title';
import { ProductConsumer } from '../../Context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

class AddProduct extends Component {
    state = {
        product: {
            id: "",
            title: "",
            img: "img/product-1.png",
            price: 0,
            company: "",
            info: "",
            inCart: false,
            count: 0,
            amount: 0,
            total: 0
        }
    }

    updateTitle = (value) => {
        const tempProduct = this.state.product;

        console.log(tempProduct);

        tempProduct.title = value;
        this.setState({
            product: tempProduct
        })
    }

    updatePrice = (value) => {
        const tempProduct = this.state.product;

        tempProduct.price = value;
        this.setState({
            product: tempProduct
        })
    }

    updateAmount = (value) => {
        const tempProduct = this.state.product;

        tempProduct.amount = value;
        this.setState({
            product: tempProduct
        })
    }

    updateCompany = (value) => {
        const tempProduct = this.state.product;

        tempProduct.company = value;
        this.setState({
            product: tempProduct
        })
    }

    updateInfo = (value) => {
        const tempProduct = this.state.product;

        tempProduct.info = value;
        this.setState({
            product: tempProduct
        })
    }

    handleCancel = () => {
        const tempProduct = this.state.product;

        tempProduct.title = "";
        tempProduct.price = 0;
        tempProduct.company = "";
        tempProduct.info = "";

        this.setState({
            product: tempProduct
        })
    }

    render() {
        const no_padding = {
            padding: '0',
        }
        return (
            <section>
                <React.Fragment>
                    <div className='container-fluid' >
                        <div className="row">
                            <div className="col-3 mx-auto text-center nav-admin" style={no_padding}>
                                <Navbar />
                            </div>
                            <div className="col-9 mx-auto">
                                <section>
                                    <ProductConsumer>
                                        {(value) => {
                                            const { addProduct } = value;
                                            return (
                                                <React.Fragment>
                                                    <Title name="Add" title="New Product" />
                                                    <AddContainer className="col-12 mx-auto text-capitalize">
                                                        <form className="form-block" onSubmit={() => {
                                                            this.contactSubmit();
                                                            addProduct(this.state.product)}}>
                                                            <div className="form-group">
                                                                <label>Title:</label>
                                                                <input
                                                                    type="text" className="form-control" required name="title" placeholder="Product Name"
                                                                    value={this.state.product.title}
                                                                    onChange={(event) => this.updateTitle(event.target.value)}
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Price:</label>
                                                                <input
                                                                    type="number" className="form-control" required name="price" placeholder="Price"
                                                                    value={Number(this.state.product.price).toString()}
                                                                    onChange={(event) => this.updatePrice(event.target.value)}
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Amount:</label>
                                                                <input
                                                                    type="number" className="form-control" required name="amount" placeholder="Price"
                                                                    value={Number(this.state.product.amount).toString()}
                                                                    onChange={(event) => this.updateAmount(event.target.value)}
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Company:</label>
                                                                <input
                                                                    type="text" className="form-control" required name="company" placeholder="Company"
                                                                    value={this.state.product.company}
                                                                    onChange={(event) => this.updateCompany(event.target.value)}
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                <label>Information:</label>
                                                                <input
                                                                    type="text" className="form-control" required name="info" placeholder="Information"
                                                                    value={this.state.product.info}
                                                                    onChange={(event) => this.updateInfo(event.target.value)}
                                                                />
                                                            </div>
                                                            <Link to="/">
                                                                <button type="submit" className="btn btn-primary"
                                                                    onClick={() => {
                                                                        this.contactSubmit();
                                                                        addProduct(this.state.product)}}
                                                                >Submit</button>

                                                                <button type="button" className="btn btn-warning"
                                                                    onClick={() => this.handleCancel()}
                                                                >Cancel</button>
                                                            </Link>
                                                        </form>
                                                    </AddContainer>
                                                </React.Fragment>
                                            )
                                        }}
                                    </ProductConsumer>
                                </section>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            </section>
        )
    }
}

const AddContainer = styled.div`


`

export default AddProduct;