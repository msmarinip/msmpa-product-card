import React from 'react';
import { useContext, CSSProperties, useCallback } from 'react';
import { ProductContext } from "./ProductCard";

import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: CSSProperties;
    
}

export const ProductButtons = ({ className, style }: Props) => {
// maxCount del productContext

    const {increaseBy, counter, maxCount} = useContext(ProductContext)
// isMaxReached = useCallback, las dependencias son [ counter, maxCount]
        //regresa true si counter === maxCount, false si es distinto

    const isMaxReached =  useCallback(
        // () => {
        //     if(!maxCount) return;
        //     if ( counter === maxCount) {
        //         return true;
        //     } else {
        //         return false
        //     }
            
        // },
        // [counter, maxCount],
        //Más elegante así
        () => !!maxCount && counter === maxCount,
        [counter, maxCount]
    )
    return (
        <div 
            className={ `${styles.buttonsContainer} ${className}` }
            style={ style }
        >
            <button
                className={ styles.buttonMinus }
                onClick={ () => increaseBy(-1) }> - </button>
            <div className={ styles.countLabel }> { counter } </div>
            <button
                className={ `${ styles.buttonAdd } ${ (isMaxReached() && styles.disabled)  }` }
                onClick={ () => increaseBy(1) }> + </button>
        </div>
    );
}
