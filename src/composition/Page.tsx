import React from 'react'

export const Page: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <h1>Page</h1>
            {children}
        </div>
    )
}
