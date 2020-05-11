import React from 'react';
import './Cart.css'

const Cart = (props) => {
    
    const cart = props.clickPerson;
    console.log("cart",cart.length)

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const newSalary = parseInt(item.salary);
        total = total + newSalary
        console.log(total);
    }

    return (
        <div className="homeCount">
            <h2>Friend Summery  </h2>
            <h3>Friends Added : {cart.length} </h3>
            <h3> Total Salary : {total}</h3>
        </div>
    );
};

export default Cart;