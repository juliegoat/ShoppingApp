import React from 'react';

import { Button, Container, Card } from '../../components';

import './NewSessionPage.scss';

interface INewSessionPage {
    handleNewSessionOnClick: any,
}

const NewSessionPage = (props: INewSessionPage) => {
    const { handleNewSessionOnClick } = props;

    return (
        <Container>
            <div className="p-new-session">
                <div className="p-new-session__heading">
                    <span className="c-label">Currently in Beta</span>

                    <h1>A curated shopping experience with your friend.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <Card width="600px">
                    <div>
                        <h2 class="form-header">What are you shopping for?</h2>
                        <button onClick="turngreen">Sweaters</button>
                        <button onClick="turngreen">Candles</button>
                        <button onClick="turngreen">Make-up</button>
                        <button onClick="turngreen">Snacks</button>
                        <button onClick="turngreen">Toilet Paper</button>
                        <button onClick="turngreen">Just browsing!</button>

                        <h2 class="form-header">What kind of shops do you like?</h2>
                        <button onClick="turngreen">Local to me</button>
                        <button onClick="turngreen">Women-owned</button>
                        <button onClick="turngreen">Sustainably-sourced</button>
                        <button onClick="turngreen">No Preference!</button>

                        <h2 class="form-header">What kind of price range are you looking at?</h2>
                        <button onClick="turngreen">$</button>
                        <button onClick="turngreen">$$</button>
                        <button onClick="turngreen">$$$</button>
                        <button onClick="turngreen">$$$$</button>
                        <button onClick="turngreen">I'll worry about that later!</button>

                    </div>
                    <form onSubmit={handleNewSessionOnClick}>
                        <Button label="Start shopping" handleClick={handleNewSessionOnClick} />
                    </form>
                </Card>
            </div>
        </Container>
    )
}

export default NewSessionPage;