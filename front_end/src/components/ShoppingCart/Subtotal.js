import React, { Component } from 'react';

export default class Subtotal extends Component {
    render() {
        return (
            <div className="container p-3">
            <h3 style={{color:"#C8C8C8"}}>Subtotal</h3>
            <div className="container w-75 p-3 cart-subtotal">
            <div className="row my-1 text-capitalize text-center">
                <table className="table table-borderless">
                    <thead>
                        <tr>
                        <th scope="col" className="borderless text-light"><h4>Total</h4></th>
                        <th scope="col" className="borderless text-light"><h4>$ 0.00</h4></th>
                        </tr>
                    </thead>
                </table>
                </div>
            </div>
            </div>
    
        )
    }
}







