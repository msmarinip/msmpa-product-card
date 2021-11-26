import React from 'react'
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

product1
describe('ProductTitle', () => {
    test('debe mostrar el componente correctamente con el título personalizado', () => {
        
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className="custom-class" style={{color: 'white'}}/>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
        // el test dio este error: Could not locate module ../styles/styles.module.css mapped as:     identity-obj-proxy.
        //tengo que instalar el identity-obj-proxy. en desarrollo
    })
    
    test('Debe mostrar el componente con el nombre del producto', () => {
        
        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard> 
        )

        expect(wrapper.toJSON()).toMatchSnapshot();
    })
    
})
