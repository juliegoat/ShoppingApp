import React from 'react';
import { Link } from "react-router-dom";

import { Container } from '../../components';

import './Navigation.scss';

const Navigation = () => {
    return (
        <nav className="p-navigation">
            <div className="p-navigation__bar" />

            <Container>
                <ul>
                    <li>
                        <Link to="/">
                            <span className="p-navigation__mark">
                                <strong>
                                    TheMallTogether
                                </strong>

                                <small>
                                    Interactive Shopping
                                </small>
                            </span>
                        </Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navigation;