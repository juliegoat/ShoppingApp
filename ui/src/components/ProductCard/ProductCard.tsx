import React from 'react';

import { Button } from '../../components';

import './ProductCard.scss';

const ProductCard = (props: any) => {
    const { title, description, image, price } = props;

    return (
        <div className="c-product-card">
            <div className="c-product-card__image">
                <img src={image} />
            </div>

            <div className="c-product-card__description">
                <h2>{title}</h2>
                <p>{description}</p>
                <p>${price}</p>
            </div>

            <Button label="Add to cart" bg="#002798" />
        </div>
    )
}

export default ProductCard; 