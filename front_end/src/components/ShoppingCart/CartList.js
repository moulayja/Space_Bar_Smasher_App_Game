import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Cart from './Cart';
import Subtotal from './Subtotal';


export default class CartList extends Component {
    state = {
        color: "#ff1493"
    }
    render() {
        const renderCartItems = this.props.cart.map(product => (<Cart product={product} key={product.id}/>))  

        return (
            <div className="mt-4" >
            <Header cart={this.props.cart} />
            {renderCartItems}
            {
            renderCartItems.length === 0 
            ? 
            <div className="text-center" style={{width:"70%", height:"90px"}}>
                <h1 style={{color:'#C8C8C8'}}>No Items to render</h1>
            </div>
            :
            <div>
            <Subtotal/>
            <Footer colorize={this.state.color} />
            </div>
            
            }
               
            </div>


        )
    }
}







