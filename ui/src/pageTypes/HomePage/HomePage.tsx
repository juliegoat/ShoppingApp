import React from 'react';

import { Container, Button } from '../../components';
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

                <iframe src="https://api-demo.daily.co/​xJEfnyy910HCyhDAgdu1"></iframe>

                <Button label="NEXT STORE" color="red" />
            </Container>
        </>
    )
}

export default HomePage;