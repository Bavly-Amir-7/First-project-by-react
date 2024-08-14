// this is CounterProvider.jsx file


import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

export default function CounterProvider({ children }) {
    const [count, setCount] = useState(10);

    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
}
