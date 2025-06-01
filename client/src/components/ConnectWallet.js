import React, { useState } from 'react';
import { connectWallet } from '../utils/web3Utils';
export default function ConnectWallet({ onConnect }) {
    const [address, setAddress] = useState('');
    const handleConnect = async () => {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts'
            });

            const addr = accounts[0];
            setAddress(addr);
            onConnect(addr);
        } catch (err) {
            console.error("Erreur lors de la connexion à MetaMask :", err);
        }
    } else {
        alert("MetaMask n'est pas installé !");
    }};
    return (
        <div className="mb-4 text-center">
            {!address ? (
                <button className="btn btn-success" onClick={handleConnect}>
                    Connexion MetaMask
                </button>
            ) : (
                <div className="alert alert-info">
                    Adresse connectée : <strong>{address}</strong>
                </div>
            )}
        </div>);}
