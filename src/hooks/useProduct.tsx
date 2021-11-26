import { useEffect, useRef, useState } from 'react';
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product;
    value?: number; 
    onChange?: ( args: onChangeArgs ) => void;
    initialValues?: InitialValues;
}

export const useProduct = ({onChange, product, value = 0, initialValues}: useProductArgs )  => {
    
    const [counter, setCounter] = useState<number>(initialValues?.count || value);
    const isMounted = useRef(false)
    // console.log(initialValues?.count || value)
    // console.log(initialValues?.count)
    // console.log(counter)
    const increaseBy = ( value: number ) => {
    
        let newValue= Math.max(counter + value, 0) //esto es porque si al onChange le mando el couter va a enviar el código anterior
        // setCounter(prev => Math.max(prev + value, 0))
        //Mi solución
        // initialValues?.maxCount 
        //     ? setCounter(Math.min(newValue, initialValues?.maxCount))
        //     : setCounter(newValue) 
        
        if(initialValues?.maxCount){
            newValue=Math.min(newValue, initialValues?.maxCount)
        }
        setCounter(newValue);
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value);

    }, [value])
    //cuando tenía este useEffect arriba del anterior no funcionaba
    useEffect(() => {
        isMounted.current = true;
    }, [])
    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter, 
        maxCount: initialValues?.maxCount,
        increaseBy,
        reset,
    }
              
    
}
