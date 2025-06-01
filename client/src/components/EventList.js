import React, { useEffect, useState } from 'react';
import { getEvents } from '../utils/web3Utils';
import EventItem from './EventItem';

export default function EventList({ account }) {
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        const evts = await getEvents(account);
        setEvents(evts);
    };

    useEffect(() => {
        fetchEvents();
    }, [account]);

    return (
        <div className="container">
            <h2 className="text-primary mb-4">Liste des événements</h2>
            {events.length === 0 ? (
                <p>Aucun événement disponible.</p>
            ) : (
                events.map((evt) => (
                    <EventItem key={evt.id} event={evt} onBook={fetchEvents} />
                ))
            )}
        </div>
    );
}
