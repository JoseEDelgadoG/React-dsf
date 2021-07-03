import React, { useState } from 'react';


export const Count = () => {

    const [numero, setNumero] = useState(1);
    const [cant, setCant] = useState(0);
    
    // Hook
    const handleIncrement = () => {
        if (numero > 0) {
            setNumero(numero - 1);
            setCant(cant + 1);
        }
        };
        const handleDecrement = () => {
        if (cant > 0) {
            setNumero(numero + 1);
            setCant(cant - 1);
        }
        };

    return (
        <div>
            <h1>Contador</h1>
        </div>
    )
}
