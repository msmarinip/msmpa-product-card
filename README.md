# msmpa-Product-Card
Este es un paquete de pruebas de despliegue en NPM

### Soledad Marini

## Ejemplo
```
import { ProductCard,    ProductImage, ProductTitle,    ProductButtons} from msmpa-product-card
```
```
<ProductCard 
    product={ product }
    
    initialValues={{
        count: 4,
        // maxCount: 10,
    }}
    >
    {
        // ( args ) => (
        ({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
            <>
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons/>
            </>
        )
    }
</ProductCard>
```