import React from 'react';

import { Container, Button } from '../../components';
import { StoreFront, Cart } from '../../partials';

import './HomePage.scss';

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
                <div className="p-home__store">
                    <div>
                        <iframe height="400px" src="https://api-demo.daily.co/CeodJrirq5I3BBoz3k8b"></iframe>
                        <div ref={cartRef}>
                            <button onClick={() => setCartOpen(!cartOpen)}>
                                VIEW CART
                            </button>
                            <Cart isOpen={cartOpen} />
                        </div>
                    </div>

                    <StoreFront />
                </div>

                <div className="p-home__controllers">
                    <Button label="End shopping" bg="transparent" color="#1D1D2E" border="1px solid #1D1D2E" />
                    <Button label="Next store" />
                </div>
            </Container>
        </>
    )
}

export default HomePage;