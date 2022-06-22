import React, { FC, ReactNode } from 'react'

interface CardProps {
    children: ReactNode;
    id: string | number;
    title: string;
    body: string;

}


export const Card: FC<CardProps> = ({ children, id, title, body }) => {
    return (
        <div key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
            {children}
        </div>
    )
}
