import React from 'react';
import { useContext } from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';


export interface Props {
    title?: string; 
    className?: string;
    style?: React.CSSProperties;
}
//Para hecerlo diferente de la img, desestructuro el title de la interface y va a ser
//al hacerlo de esta manera el título es obligatorio
// export const ProductTitle = ({ title, className }: { title?: string, className?:string }) => {
    export const ProductTitle = ({ title, className, style }: Props) => {
    const { product } = useContext(ProductContext)
    
    return (
        <span 
            className={ `${styles.productDescription} ${className}` }
            style={ style }
        >{ title ? title : product.title } </span>
    )
}