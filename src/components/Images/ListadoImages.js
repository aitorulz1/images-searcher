import React from 'react';
import Image from './Image';

export default function ListadoImages({imagenes}) {
    return (
        <div className="individual-card-image">
            {imagenes.map(imagen => (
                <Image
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
    )
}
