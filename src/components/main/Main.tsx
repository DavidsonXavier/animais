import React from 'react';

import './estilo.css'

type iChildren = {
    children: React.ReactNode | React.ReactNode[];
}

export default function Main({ children }: iChildren) {
    return (
        <div className="principal">
            {children}
        </div>
    )
}