import React from 'react';
import CartItem from '../../Components/CartItem/CartItem'



const CartItemList = ({cart, addItem, removeItem, subtractItem, totalQuantity}) =>{
    return (
        <div style={{flexBasis: '66%', paddingLeft: '20px'}}>
            <h1>{`${totalQuantity} ${totalQuantity === 1 ? 'item' : 'items'}`}</h1>
            {Object.keys(cart).map(item =>{
                if(item === 'totalPrice') return null
                return <CartItem key={cart[item].id} subtractItem={() => subtractItem(cart[item].id)} removeItem={() => removeItem(cart[item].id)} addItem={() => addItem(cart[item].id)} {...cart[item]} />
            })}
        </div>
    )
}

export default CartItemList