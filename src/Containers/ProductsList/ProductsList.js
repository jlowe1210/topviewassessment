import React from 'react';
import styles from './ProductList.module.css';
import Product from '../../Components/Product/Product'

const ProductList = ({products, addItem}) =>{

    


    return (
        <div className={styles.section_container}>
            <h1 className={styles.section_header}>Our Products</h1>
            <div className={styles.products_container}>
                {products.map(product =>{
                    return <Product key={product.id} addItem={() => addItem(product.id)} {...product} />
                })}
            </div>
        </div>
    )
}


export default ProductList