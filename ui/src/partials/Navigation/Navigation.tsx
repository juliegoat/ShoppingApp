import React from 'react';
import { Link } from "react-router-dom";

import { Container } from '../../components';

import './Navigation.scss';

const Navigation = () => {
    return (
        <Container>
            <nav className="p-navigation">
                <ul>
                    <li>
                        <Link to="/">
                            <strong>
                                TheMallTogether
                            </strong>
                        </Link>
                    </li>

                    <li>
                        <Link to="/test">
                            Second Page
                        </Link>
                    </li>
                </ul>
            </nav>
        </Container>
    )
}

export default Navigation;