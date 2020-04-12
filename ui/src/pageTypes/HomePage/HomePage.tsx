import React from 'react';

import { Container } from '../../components';
import { StoreFront, Cart } from '../../partials';

interface IHomePage {
    cartOpen: boolean,
    setCartOpen: Function,
    cartRef: any,
}

const HomePage = (props: IHomePage) => {
    const { cartOpen, setCartOpen, cartRef } = props;

    return (
        <>
            <Container>
                <div ref={cartRef}>
                    <button onClick={() => setCartOpen(!cartOpen)}>
                        OPEN CART
                    </button>
                    <Cart isOpen={cartOpen} />
                </div>

                <StoreFront />
            </Container>
        </>
    )
}

export default HomePage;