import React from 'react';

import { Button } from '../../components';

import './Cart.scss';

interface ICartProps {
    isOpen: boolean,
}

const Cart = (props: ICartProps) => {
    const { isOpen } = props;

    return (
        <>
            <aside className={`p-cart ${isOpen ? 'p-cart__open' : ''}`}>
                <div className="p-cart__heading">
                    <h3>General Cart:</h3>
                    <p>Here's a list of what you and your friends have collected.</p>
                </div>

                <i className="p-cart__user">Emilia added...</i>
                <ul>
                    <li>
                        <strong>Naked Papaya</strong>
                        <p>Gentle Enzyme Face Cleanser</p>
                        <p>$22.99</p>

                        <Button label="Purchase" />
                    </li>

                    <li>
                        <strong>Supermello</strong>
                        <p>Hydrating Gel Cream Moisturizer</p>
                        <p>$24.99</p>

                        <Button label="Purchase" />
                    </li>
                </ul>

                <i className="p-cart__user">Samantha added...</i>
                <ul>
                    <li>
                        <strong>Naked Papaya</strong>
                        <p>Gentle Enzyme Face Cleanser</p>
                        <p>$22.99</p>

                        <Button label="Purchase" />
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default Cart;