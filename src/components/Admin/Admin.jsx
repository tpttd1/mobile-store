import React, { Component } from 'react';
// import Navbar from '../../components/Navbar';
import ListProduct from './ListProduct';
import { ProductConsumer } from '../../Context';
import Navbar from './Navbar';

class Admin extends Component {
    state = {
        data: ""
    }

    handleShow = () => {
        
    }

    
    render() {
        const no_padding = {
            padding: '0',
        }
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        return (
                            <React.Fragment>
                                <div className='container-fluid'>
                                    <div className="row">
                                        <div className="col-3 mx-auto text-center" style={no_padding}>
                                            <Navbar />
                                        </div>
                                        <div className="col-9 mx-auto text-center">
                                            <ListProduct value={value} />
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    }}

                </ProductConsumer>

            </section>

        )
    }
}

export default Admin;