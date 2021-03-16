import React, { useState } from 'react';

import Error from '../Error/Error';

export default function Formulario({guardarBusqueda}) {


    const [ concept, guardarConcept ] = useState('');
    const [ error, guardarError ] = useState(false);

    const onSubmit = e => {
        e.preventDefault();

        if(concept.trim() === '') {
            guardarError(true);
            return;
        }
        guardarError(false);

        guardarBusqueda(concept);
    }


    return (
        <div className="form-container">

            <div className="conatiner-description">
                Stunning free images to let your creativity have no limits
            </div>

            <div className="conatiner-subdescription">
                More than 2 million images | high quality | illustration | more...
            </div>

            { error ? <Error /> : null }
            
            <form
                onSubmit={onSubmit}
            >
                <input
                    type='text'
                    name='searcher'
                    placeholder='Search images...'
                    className='search-input'
                    onChange={e => guardarConcept(e.target.value)}
                />

                <input
                    type='submit'
                    value='search'
                />

            </form>

        </div>
    )
}
