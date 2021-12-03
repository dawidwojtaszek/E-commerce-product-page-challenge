import React, { useState, createContext } from 'react';

export const LightBoxContext = createContext();

export const LightBoxProvider = props => {
    const [showLightBox, toggleLightBox] = useState(false);
    return (
        <LightBoxContext.Provider value={[showLightBox, toggleLightBox]}>
            {props.children}
        </LightBoxContext.Provider>
    )
}