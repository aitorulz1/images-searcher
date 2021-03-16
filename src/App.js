import React, { useState, useEffect } from 'react';

import './App.css';

import Formulario from './components/Formulario/Formulario';
import ListadoImages from './components/Images/ListadoImages';


function App() {

  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);

  useEffect(() => {
    
    const consultarApi = async() => {
      
      if(busqueda === '') return;

      const imagesPerPage = 30;
      const key ='15980012-981f41cd5920ac3ee2112a85d';
      const urlphoto = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagesPerPage}`;
      // const urlvideos = `https://pixabay.com/api/videos/?key=${API}&q=${busqueda}&per_page=${imagesPerPage}`;

      const respuesta = await fetch(urlphoto);
      const resultado = await respuesta.json()

      guardarImagenes(resultado.hits)    

    }
    consultarApi();
    
  }, [busqueda])

  return (
    <div className="">
      
      <Formulario 
        guardarBusqueda={guardarBusqueda}
      />

      <ListadoImages
        imagenes={imagenes}
      /> 

    </div>
  );
}

export default App;
