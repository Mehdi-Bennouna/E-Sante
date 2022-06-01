import React from 'react';
import { useParams } from 'react-router-dom';

export default function Patient() {
    const { userId } = useParams();
    return <div>Patient with the id of ({userId})</div>;
}
