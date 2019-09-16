import React from 'react';
import styles from './Product.module.css'

const Product = ({name,price,image, addItem}) =>{
    return (
        <div className={styles.product_container}>
            <h4>{name}</h4>
            <div className={styles.image_container}>
                <img alt='product' src={image}/>
                <div className={styles.price_tag}>{`$${parseFloat(price).toFixed(2)}`}</div>
            </div>
            <button onClick={addItem} className={styles.cart_btn}>Add to cart</button>
            
        </div>
    )
}

export default Product