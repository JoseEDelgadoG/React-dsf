import React from 'react';
import { NavBar } from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

export const PBSApp = () => { 
    const saludo = "Bienvenidos a Professional Bowlers Shop";
    return (
        <div>
            <NavBar />
            <ItemListContainer />;
        </div>
    )
}