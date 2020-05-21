import React, { Component } from 'react';
import HeaderAdmin from '../Header/HeaderAdmin';
import Footer from '../Footer/Footer';
import DeleteCardUI from '../Cards/DeleteCardUI';
import ScrollUpButton from "react-scroll-up-button";




export default class AdminDeleteProducts extends Component {
    state = {
        color: "#db1414"
    }
    
    render(){
        const renderProducts = this.props.products.map(product => (
            
        <DeleteCardUI
        deleteProduct={this.props.deleteProduct}
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
        productId={product.id}
        key={product.id} />
    ))        
        return (
            <div>
            <ScrollUpButton  style={{backgroundColor: "rgb(219, 20, 20)", outline:'0'}}/>
            <HeaderAdmin />
            <div className="container">
            <div className="row">
                {renderProducts}
            </div>
            </div>
            <Footer colorize={this.state.color}/> 
            </div>
        )
    }
}
