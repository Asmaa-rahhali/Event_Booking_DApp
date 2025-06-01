import React, { useState } from 'react';

export default function EventItem({ event, onBook }) {
    const [loading, setLoading] = useState(false);

    const handleBook = async () => {
        setLoading(true);
        try {
            await onBook(event.id);
            alert(`Réservation réussie pour "${event.name}"`);
        } catch (error) {
            alert(`Erreur : ${error.message}`);
        }
        setLoading(false);
    };

    const isFull = event.registered >= event.capacity;
    const alreadyBooked = event.hasReserved;

    return (
        <div className="card mb-3 border-secondary">
            <div className="card-body">
                <h5 className="card-title text-primary">{event.name}</h5>
                <p className="card-text">Capacité : {event.capacity}</p>
                <p className="card-text">Places restantes : {event.capacity - event.registered}</p>

                {alreadyBooked ? (
                    <span className="badge bg-primary">Réservé</span>
                ) : isFull ? (
                    <span className="badge bg-secondary">Complet</span>
                ) : (
                    <button
                        className="btn btn-outline-secondary"
                        onClick={handleBook}
                        disabled={loading}
                    >
                        {loading ? 'Réservation...' : 'Réserver'}
                    </button>
                )}
            </div>
        </div>
    );
}
