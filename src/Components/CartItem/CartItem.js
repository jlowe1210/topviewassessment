import React from 'react'
import styles from './CartItem.module.css'


const CartItem = ({id, image, name, price, qty, total, product_type, addItem, removeItem, subtractItem}) =>{
    return (
        <div className={styles.cartitem_container}>
            <div className={styles.cartitem_image_container}>
                <img alt='cart item' className={styles.cartitem_image} src={image} />
            </div>
            <div className={styles.cartitem_details}>
                <p>{name}</p>
                <p>{`$${parseFloat(total).toFixed(2)}`}</p>
                <p>item Price: {`$${parseFloat(price).toFixed(2)}`}</p>
                <p>Product type: {product_type}</p>
                <p>Qty: <span onClick={subtractItem} style={{cursor: 'pointer'}}>-</span> {qty} <span style={{cursor: 'pointer'}} onClick={addItem} >+</span></p>
                <h5 onClick={removeItem} className={styles.remove_btn}>Remove</h5>
            </div>
        </div>
    )
}

export default CartItem