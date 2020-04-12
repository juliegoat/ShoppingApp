import React from 'react';

import './StoreFront.scss';

import { ProductCard } from '../../components';

const StoreFront = () => {
    return (
        <>
            <div className="p-store-front">
                <div className="p-store-front__company">
                    <div className="p-store-front__company-description">
                        <h1>Kinship</h1>
                        <p>Chaos-proof your complexion without disrupting your skin barrier. Clean, cruelty-free + dermatologist-tested skincare. Paraben, sulfate + fragrance-free.</p>
                    </div>

                    <div className="p-store-front__company-nav">
                        <ul>
                            <li>
                                <a href="https://lovekinship.com/">
                                    DISCOVER MORE
                                </a>
                            </li>

                            <li>
                                <a href="">
                                    SHARE
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="p-store-front__products">
                    PRODUCTS

                    <ProductCard />
                </div>
            </div>
        </>
    )
}

export default StoreFront;