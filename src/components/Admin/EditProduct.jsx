import React, { Component } from 'react';
import styled from 'styled-components';
import { ProductConsumer } from '../../Context';
// import { ButtonContainer } from '../Button';
import { Link } from 'react-router-dom';

class EditProduct extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    const { modalOpen, closeModal } = value;
                    const { id, img, title, company, info, price, count } = value.editProduct;

                    if (!modalOpen) return null;
                    else {
                        return (
                            <ModalEditContainer>
                                <div className="container">
                                    <div className="row">
                                        <div id="modal" className="col-9 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5">
                                            <form className="form-block" onSubmit={() => this.addProduct(this.state.product)}>
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
                                                        onClick={() => this.editProduct(this.state.product)}
                                                    >Submit</button>

                                                    <button type="button" className="btn btn-warning"
                                                        onClick={() => this.handleCancel()}
                                                    >Cancel</button>
                                                </Link>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </ModalEditContainer>
                        );
                    }
                }}
            </ProductConsumer>
        )
    }
}

const ModalEditContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`

export default EditProduct;