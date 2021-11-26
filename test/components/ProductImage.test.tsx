import React from 'react';

import renderer from 'react-test-renderer';
import {ProductCard,  ProductImage } from '../../src/components';
import { product2 } from '../data/products';


describe('ProductImage', () => {


    test('Debe mostrar el componente con la imagen personalizada', () => {
        const wrapper = renderer.create(
            <ProductImage img='ddd.png'/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
    

    test('Debe mostrar correctamente la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage img={product2.img}/>
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
    
})
