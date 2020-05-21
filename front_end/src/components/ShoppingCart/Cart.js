import React, { Component } from 'react';
import swal from 'sweetalert';


export default class Cart extends Component {

    state={
        counter: 1,
        price: null,
        total: null
    }
    increment =()=>{
        this.setState({
            counter: this.state.counter + 1,
            price: this.props.product.price,
            total : (this.state.counter + 1) * (this.props.product.price)
         })
    }

    decrement =()=>{
        if (this.state.counter > 0){
            this.setState({
                counter: this.state.counter - 1,
                price: this.props.product.price,
                total : (this.state.counter - 1) * (this.props.product.price)
            
            })
        }else{
            swal("You forgot to add a quantity!", "Please add a quantity", "error")

        }
    }


    render() {
        return (
            <div className="container w-75 p-3 bgWhite">
            <div className="container border border-pink">
            <div className="row my-1 text-capitalize text-center">
                <div className="col-10 mx-auto col-lg-2">
                    <img 
                    src={this.props.product.image}
                    style={{width:"8rem", height: "7rem", border: "0.8rem solid white"}}
                    className="img-fluid rounded-circle"
                    alt="product"
                    />
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2">
                    <h5 className="d-lg text-secondary">{this.props.product.name}</h5>
                    
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2">
                <h5 className="d-lg text-danger">${this.props.product.price}</h5>
                    
                </div>
                <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center my-2">
                    <span className="btn btn-incDec mx-1" onClick={this.decrement}>-</span>
                    <span className="btn btn-incDec mx-1">{this.state.counter}</span>
                    <span className="btn btn-incDec mx-1" onClick={this.increment}>+</span>                
                    <span className="btn btn-remove mx-1"><i className="far fa-trash-alt"></i></span>
                </div>
                </div>
                </div>
 
            </div>
            </div>
    
        )
    }
}







