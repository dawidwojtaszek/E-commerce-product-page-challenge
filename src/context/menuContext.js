import React, { useState, createContext } from 'react';

export const MenuContext = createContext();

export const MenuProvider = props => {
    const [showMenu, toggleMenu] = useState(false);
    return (
        <MenuContext.Provider value={[showMenu, toggleMenu]}>
            {props.children}
        </MenuContext.Provider>
    )
}