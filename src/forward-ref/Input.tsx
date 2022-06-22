import React, { forwardRef } from 'react'

interface Props {
    label: string;
    placeholder: string;
}

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, Props>(({ label, placeholder }, ref) => {
    return (
        <>
            <label>{label}</label>
            <input type="text" ref={ref} placeholder={placeholder} />

        </>
    )
})

