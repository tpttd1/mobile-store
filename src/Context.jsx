import React, { Component } from 'react';
import { storeProducts, detailProduct, addProduct } from './data';
import { v1 as uuid } from "uuid";

const ProductContext = React.createContext();


class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalProduct: detailProduct,
        modalOpen: false,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
        addProduct: addProduct,
        editProduct: detailProduct,
        token: ''
    }


    componentDidMount() {
        this.getToken();
        // this.setProducts();
    }


    // get data from java spring 

    getToken = () => {
        fetch("http://localhost:8080/authenticate", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    username: 'javainuse',
                    password: 'password'
                }
            )
        })
            .then(res => res.json()).then(res => {
                let tokens = res.token;
                console.log("token: ", tokens);
                this.setState({
                    token: tokens
                }, function () {
                    console.log("when set token: " + this.state.token);
                });
                this.setProducts();
            });
    }

    setProducts = () => {
        let bearer = this.state.token;
        console.log("when set product: " + bearer)

        fetch("http://localhost:8080/api/getAll", {
            credentials: 'include',
            headers: {
                'Authorization': `Bearer ${bearer}`
            }
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState(() => {
                        return { products: result };
                    });
                },
                (error) => {
                    console.log("load info has failed");
                }
            )
    }


    // setProducts = () => {
    //     let tempProducts = [];
    //     storeProducts.forEach(item => {
    //         const singleItem = { ...item };
    //         tempProducts = [...tempProducts, singleItem];
    //     });
    //     this.setState(() => {
    //         return { products: tempProducts };
    //     })
    // }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id);
        return product;
    }

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product }
        })
    }

    addToCart = (id) => {
        let tempProducts = [...this.state.products]
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(
            () => {
                return {
                    products: tempProducts, cart: [...this.state.cart, product]
                };
            },
            () => {
                this.addTotals();
            }
        )
    }

    openModal = id => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true }
        });
    }

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false }
        });
    }

    increment = id => {
        let tempCart = [...this.state.cart];
        const index = tempCart.indexOf(this.getItem(id));
        let product = tempCart[index];

        product.count += 1;
        product.total = product.price * product.count;
        tempCart.splice(index, 1, product)
        this.setState(() => {
            return {
                cart: [...tempCart]
            };
        }, () => {
            this.addTotals();
        })

    }

    decrement = id => {
        let tempCart = [...this.state.cart];
        const index = tempCart.indexOf(this.getItem(id));
        let product = tempCart[index];

        if (product.count > 1) {
            product.count -= 1;
            product.total = product.price * product.count;
            tempCart.splice(index, 1, product)
            this.setState(() => {
                return {
                    cart: [...tempCart]
                };
            }, () => {
                this.addTotals();
            })
        } else {
            this.removeItem(id);
        }
    }

    removeItem = id => {
        const tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter(item => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removeProduct = tempProducts[index];
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;

        this.setState(() => {
            return {
                cart: [...tempCart],
                products: [...tempProducts]
            };
        }, () => {
            this.addTotals();
        })
    }

    clearCart = () => {
        this.setState(() => {
            return { cart: [] }
        }, () => {
            this.setProducts();
            this.addTotals();
        })
    }

    addTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        this.setState(() => {
            return {
                cartSubtotal: subTotal,
                cartTax: tax,
                cartTotal: total
            }
        })
    }

    addProduct = (product) => {
        let tempProducts = [...this.state.products];
        const tempProduct = product;
        tempProduct.id = uuid();
        let price = Number(tempProduct.price);
        tempProduct.price = price;
        this.setState(() => {
            return ({
                products: [...tempProducts, tempProduct]
            })
        })
    }

    editProduct = (product) => {
        let tempProducts = [...this.state.products];
        const tempProduct = product;
        tempProduct.id = uuid();
        let price = Number(tempProduct.price);
        tempProduct.price = price;
        this.setState(() => {
            return ({
                products: [...tempProducts, tempProduct]
            })
        })
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addToCart: this.addToCart,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart,
                addProduct: this.addProduct,
                editProduct: this.editProduct
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };