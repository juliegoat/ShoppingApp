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

                <Button label="NEXT STORE" />
                <ul id="messages"></ul>
                <form action="">
                    <input id="m" autoComplete="off" /><button>Send</button>
                </form>

            </Container>
        </>
    )
}

export default HomePage;