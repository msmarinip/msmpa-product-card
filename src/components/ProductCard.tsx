import React from 'react';
import { createContext, CSSProperties } from 'react';

import { useProduct } from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';



export const ProductContext= createContext({} as ProductContextProps);
//Extraigo el provider del Context que es mi proveedor de info y lo coloco donde lo necesito
//para que todos lo hijos tengan acceso al provider, es lo primero que coloco en el ProductCard
const { Provider } = ProductContext;

//el children también podría ser () => JSX.Element
export interface Props {
    className?: string;
    value?: number;
    product: Product;
    // children?: ReactElement | ReactElement[]; //puede ser un arreglo de varios children
    children: (args: ProductCardHandlers) => JSX.Element;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    initialValues?:InitialValues;
}


export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
    
    const {counter, isMaxCountReached,maxCount, increaseBy, reset} = useProduct({ onChange, product, value, initialValues });
    return (
        // En el value envío la info que necesitan los children
        <Provider value={{
            counter,
            increaseBy,
            product,
            maxCount
        }}>
            <div style={style} className={ `${styles.productCard} ${ className }` }>
                {/* React no puede renderizar una fción no puedo poner acá () => children 
                pero si puede ejecutarla*/}
                { 
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount,
                        // maxCount: initialValues?.count,
                        product,
                        increaseBy,
                        reset
                    }) 
                }

            </div>
        </Provider>
    )
}
