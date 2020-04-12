import React from 'react';

import './Cart.scss';

interface ICartProps {
    isOpen: boolean,
}

const Cart = (props: ICartProps) => {
    const { isOpen } = props;

    return (
        <>
            <aside className={`p-cart ${isOpen ? 'p-cart__open' : ''}`}>
                cart
            </aside>
        </>
    )
}

export default Cart;