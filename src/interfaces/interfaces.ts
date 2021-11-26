
import { Props as ProductCardProps } from '../components/ProductCard';
import { Props as ProductImageProps} from '../components/ProductImage';
import { Props as ProductTitleProps } from '../components/ProductTitle';
import { Props as ProductButtonsProps} from '../components/ProductButtons';


export interface Product {
    id: string;
    title: string;
    img?: string;
}


export interface ProductContextProps {
    counter: number;
    maxCount?: number;
    value?: string;
    product: Product;
    increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product, className }: ProductCardProps) : JSX.Element;
    Title:   (Props : ProductTitleProps)  => JSX.Element;
    Image:   (Props : ProductImageProps)  => JSX.Element;
    Buttons: (Props : ProductButtonsProps)  => JSX.Element;
    // Buttons: ({ className }: { className?: string }) => JSX.Element;
    // Image: ({ img, className }: { img?: string, className?: string }) => JSX.Element;
    }


export interface onChangeArgs {
    product: Product;
    count: number;
}


//Lo bueno de las interfaces es que las puedo extender,
//productInCart tiene todo lo del producto mas count
export interface ProductInCart extends Product{
    count: number;
}

export interface InitialValues {
    count?: number;
    maxCount?: number;
}

export interface ProductCardHandlers {
    count: number;
    isMaxCountReached: boolean;
    maxCount?: number;
    product: Product;
    increaseBy: (value: number) => void;
    reset: () => void;
}