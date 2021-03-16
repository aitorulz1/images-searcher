import React from 'react';
import Image from './Image';

export default function ListadoImages({imagenes}) {
    return (
        <div className="">
            {imagenes.map(imagen => (
                <Image
                    key={imagen.id}
                    imagen={imagen}
                />
            ))}
        </div>
    )
}
