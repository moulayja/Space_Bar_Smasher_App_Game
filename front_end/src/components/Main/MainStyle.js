import React, { Component, Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CardUi from '../Cards/CardUi';
// import Cart from '../ShoppingCart/Cart';
import ScrollUpButton from "react-scroll-up-button";
import { withRouter } from 'react-router-dom'; // using withRouter to redirect once the form is submitted 


class MainStyle extends Component {
    state = {
        color: "#ff1493"
    }
    
    render(){
        
        const renderProducts = this.props.products.map(product => (
        <CardUi
        addToCart={this.props.addToCart}
        id={product.id}
        name={product.name}
        image={product.image}
        description={product.description}
        price={product.price}
        key={product.id}
        product={product}
        />
    ))        
        return (
            <Fragment>
            <ScrollUpButton  style={{backgroundColor: "rgb(255, 20, 145)", outline:'0'}}/>
            <Header cart={this.props.cart}/>
            <div className="container">
            <div className="row">
                {renderProducts}
            </div>
            </div>
            <Footer colorize={this.state.color} />
            </Fragment>
        )
    }
}

export default withRouter(MainStyle)