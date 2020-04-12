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
                                TAGS:
                            </li>

                            <li>
                                BODY, SUSTAINABLE, NATURAL
                            </li>
                        </ul>

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
                    <ProductCard
                        image="https://images.accentuate.io/?c_options=w_1920&image=https://cdn.accentuate.io/4181948235856/11115305566288/PDP_NP_Alt1-v1572892825910.jpg?4320x2175&shop=Kinship%201x,%20//images.accentuate.io?c_options=w_2840&image=https://cdn.accentuate.io/4181948235856/11115305566288/PDP_NP_Alt1-v1572892825910.jpg?4320x2175&shop=Kinship%202x"
                        title="Naked Papaya"
                        description="Gentle Enzyme Face Cleanser"
                        price="22.99"
                    />

                    <ProductCard
                        image="//images.accentuate.io?c_options=w_1920&image=https://cdn.accentuate.io/4194029830224/11115305566288/PDP_IS_Alt4_Application-v1585206973730.jpg?4320x2175&shop=Kinship 1x,//images.accentuate.io?c_options=w_2840&image=https://cdn.accentuate.io/4194029830224/11115305566288/PDP_IS_Alt4_Application-v1585206973730.jpg?4320x2175&shop=Kinship 2x"
                        title="Insta Swipe"
                        description="Lemon Honey AHA Pads"
                        price="21.99"
                    />

                    <ProductCard
                        image="//images.accentuate.io?c_options=w_1920&image=https://cdn.accentuate.io/4204284149840/11115305566288/PDP_SM_Alt1-v1573111920301.jpg?4320x2175&shop=Kinship 1x,//images.accentuate.io?c_options=w_2840&image=https://cdn.accentuate.io/4204284149840/11115305566288/PDP_SM_Alt1-v1573111920301.jpg?4320x2175&shop=Kinship 2x"
                        title="Supermello"
                        description="Hydrating Gel Cream Moisturizer"
                        price="24.99"
                    />
                </div>
            </div>
        </>
    )
}

export default StoreFront;