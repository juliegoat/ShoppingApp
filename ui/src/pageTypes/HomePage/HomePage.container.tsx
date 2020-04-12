import React, { useState, useRef, useEffect } from 'react';

import HomePage from './HomePage';

const HomePageContainer = () => {
    const [cartOpen, setCartOpen] = useState(false);

    const cartRef = useRef<HTMLDivElement>();

    const handleOutsideClick = (e: any) => {
        if (cartRef.current === null) { return }

        if (cartRef.current.contains(e.target)) { return }
        setCartOpen(false)
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);

        return function cleanup() {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    });

    return (
        <HomePage
            cartOpen={cartOpen}
            setCartOpen={setCartOpen}
            cartRef={cartRef}
        />
    )
}

export default HomePageContainer;