import React, { useState } from 'react'

export const MainPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    return (
        <div>
            <h1> MainPage</h1>
            {children}
        </div>

    )
}
