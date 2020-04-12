import React from 'react';
import { Link } from "react-router-dom";

import { Container } from '../../components';

import './Navigation.scss';

const Navigation = () => {
    return (
        <nav className="p-navigation">
            <Container>
                <ul>
                    <li>
                        <Link to="/">
                            <strong>
                                TheMallTogether
                            </strong>
                        </Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navigation;