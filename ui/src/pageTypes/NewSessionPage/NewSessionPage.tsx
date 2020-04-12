import React from 'react';

import { Button, Container, Card } from '../../components';

interface INewSessionPage {
    handleNewSessionOnClick: any,
}

const NewSessionPage = (props: INewSessionPage) => {
    const { handleNewSessionOnClick } = props;

    return (
        <Container>
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
                    <Button label="New session" handleClick={handleNewSessionOnClick} />
                </form>
            </Card>
        </Container>
    )
}

export default NewSessionPage;