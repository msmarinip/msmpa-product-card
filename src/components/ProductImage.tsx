import React from 'react';

import { useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

import noImage from '../assets/no-image.jpg';

export interface Props {
    img?: string;
    className?: string; 
    style?: React.CSSProperties;
}

//un string vacío en un ternario es considerado que no tiene valor => puedo poner por defaul img=''
export const ProductImage = ({ img = '', className, style }: Props) => {

    const { product } = useContext(ProductContext)
    let imgToShow: string;

    if( img ) {
        imgToShow = img;
    } else if (product.img) {
        imgToShow = product.img;
    } else {
        imgToShow = noImage;
    }
    
    
    return (
        // <img className={ styles.productImg } src={img ? img : noImage } alt="Product img" /> 
        <img 
            src={imgToShow } 
            className={ `${styles.productImg} ${className}` } 
            style={ style }
            alt="Product img" /> 
    )
}
