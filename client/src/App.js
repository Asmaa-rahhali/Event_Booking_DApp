import React, { useState } from 'react';
import ConnectWallet from './components/ConnectWallet';
import EventList from './components/EventList';

function App() {
    const [account, setAccount] = useState('');

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">🎫 DApp de Réservation d'Événements</h1>
            <ConnectWallet onConnect={setAccount} />
            {account && <EventList account={account} />}
        </div>
    );
}

export default App;
