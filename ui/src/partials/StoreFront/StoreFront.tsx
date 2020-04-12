import React from 'react';

import './StoreFront.scss';

const StoreFront = () => {
    return (
        <>
            <div className="p-store-front">
                <div className="p-store-front__company">
                    <div className="p-store-front__company-description">
                        <h1>Kinship</h1>
                        <p>Chaos-proof your complexion without disrupting your skin barrier. Clean, cruelty-free + dermatologist-tested skincare. Paraben, sulfate + fragrance-free.</p>

                        <ul>
                            <li>Brand fact 1</li>
                            <li>Brand fact 2</li>
                            <li>Brand fact 3</li>
                        </ul>
                    </div>

                    <a href="https://lovekinship.com/">
                        DISCOVER MORE
                    </a>
                </div>

                <div className="p-store-front__products">
                    PRODUCTS
                </div>
            </div>
        </>
    )
}

export default StoreFront;