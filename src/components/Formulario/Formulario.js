import React, { useState } from 'react';
import { FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';

import Error from '../Error/Error';
import './Formulario.css';

export default function Formulario({guardarBusqueda, guardarSelectMedia,  hideWelcome}) {


    const [ concept, guardarConcept ] = useState('');
    const [ error, guardarError ] = useState(false);

    const [ selected, guardarSelected ] = useState('images');

    const cambiamosWelcomeState = () => {
        hideWelcome(false)
    }

    const onSubmit = e => {
        e.preventDefault();

        if(concept.trim() === '') {
            guardarError(true);
            return;
        }
        
        guardarError(false);
        guardarBusqueda(concept);
        guardarSelectMedia(selected);
        cambiamosWelcomeState();
    }


    return (
        <div className="form-container">
        
                    <div className="logo">
                        <a href='/'>A.A. images</a>
                    </div>

            <div className="form-content">


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
                            <div className="lupa-cont">
                                <FaSistrix />
                            </div>
                            <input
                                type='text'
                                name='searcher'
                                placeholder='Search images...'
                                className='search-input'
                                onChange={e => guardarConcept(e.target.value)}
                            />

                            <select 
                                className="media-select"
                                onChange={e => guardarSelected(e.target.value)}
                                >
                                <option value="images">images</option>
                                <option value="video">video</option>
                            </select>
                        
                            <div className="small-desc">
                            Popular Images: background, nature, spring, flowers, food, business, flower, women, money, love, office, sky
                            </div>

                            {/* <input
                                type='submit'
                                value='search'
                            /> */}

                            <div className="bywho">by Aitor Arina</div>

                        </form>

           </div>
    
        </div>
    )
}
