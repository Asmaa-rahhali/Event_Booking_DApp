import { ethers } from 'ethers';

const RAW_CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const CONTRACT_ADDRESS = ethers.getAddress(RAW_CONTRACT_ADDRESS);

const ABI = [
    "function eventCount() view returns (uint)",
    "function events(uint id) view returns (string name, uint capacity, uint registered)",
    "function reservations(address user, uint id) view returns (bool)",
    "function reserve(uint id)"
];

let provider, signer, contract;

export async function connectWallet() {
    if (window.ethereum) {
        provider = new ethers.BrowserProvider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = await provider.getSigner();
        contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
        return await signer.getAddress();
    } else {
        alert('MetaMask non trouvé !');
    }
}

export async function getContract() {
    if (!contract) await connectWallet();
    return contract;
}

export async function getEvents(account) {
    const contract = await getContract();
    const count = await contract.eventCount();
    let events = [];

    for (let i = 0; i < count; i++) {
        const e = await contract.events(i);
        const hasReserved = await contract.reservations(account, i);
        events.push({
            id: i,
            name: e.name,
            capacity: e.capacity,
            registered: e.registered,
            hasReserved
        });
    }
    return events;
}

export async function bookEvent(id) {
    const contract = await getContract();
    const tx = await contract.reserve(id);
    await tx.wait();
}
