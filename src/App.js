import React, { useState, useEffect } from 'react';


import './App.css';

import Welcome from './components/Welcome/Welcome';
import Sorry from './components/Sorry/Sorry';
import Formulario from './components/Formulario/Formulario';
import ListadoImages from './components/Images/ListadoImages';
import ListadoVideos from './components/Videos/ListadoVideos';


function App() {

  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);
  const [ videos, guardarVideos ] = useState([]);

  const [ welcome, hideWelcome ] = useState(true);
  const [ nothing, nothingToShow ] = useState(false)

  const [ selectmedia, guardarSelectMedia ] = useState('')

  const [ paginaActual, guardarPaginaActual ] = useState(1);
  const [ totalPaginas, guardarTotalPaginas ] = useState(1);

  

  useEffect(() => {
    
    const consultarApi = async() => {
      
      if(busqueda === '') return;
      if(busqueda.length === 0) {
        return nothing
      }

      const imagesPerPage = 30;
      const key = '15980012-981f41cd5920ac3ee2112a85d';
      const urlphoto = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagesPerPage}&page=${paginaActual}`;
      const urlvideos = `https://pixabay.com/api/videos/?key=${key}&q=${busqueda}&per_page=${imagesPerPage}&page=${paginaActual}`;

      const respuesta = await fetch(urlphoto);
      const resultado = await respuesta.json();

      const respuestavideo = await fetch(urlvideos);
      const resultadovideo = await respuestavideo.json();

      guardarImagenes(resultado.hits)    
      guardarVideos(resultadovideo.hits)

      console.log(resultadovideo.hits)    

      // Calcular total páginas
      const calcularPaginas = Math.ceil(resultado.totalHits / 30);
      guardarTotalPaginas(calcularPaginas);

        // Mover hacia arriba
      const goingUp = document.querySelector('.main-wrapper');
      goingUp.scrollIntoView({behavior: "smooth"});

    }
    consultarApi();
    
  }, [busqueda, paginaActual])


  // Botones Previous & Next

  const paginaAnterior = () => {

      const retrocedrPagina = paginaActual - 1;

      if(paginaActual === 0) return;

      guardarPaginaActual(retrocedrPagina)

  }

  const paginaSiguiente = () => {

      const retrocedrPagina = paginaActual + 1;

      if(paginaActual > totalPaginas) return;

      guardarPaginaActual(retrocedrPagina)

  }




  return (
    <div className="main-wrapper">

      
      <Formulario 
        guardarBusqueda={guardarBusqueda}
        guardarSelectMedia={guardarSelectMedia}
        hideWelcome={hideWelcome}
      />

      {welcome ? <Welcome /> : null }
      
      {nothing ? <Sorry /> : null }

      <div className="listadoImages-container">

      {selectmedia === 'images' ?
          <ListadoImages
            imagenes={imagenes}
          /> 
        :           
          <ListadoVideos
            videos={videos}
          /> 
        }
      </div>



      <div className="buttons-container">

        { 
          (paginaActual === 1) ? null :
            <button
              type='button'
              className='button-anterior'
              onClick={paginaAnterior}
              >
                  &laquo; previous
            </button>
        }

        { 
          (paginaActual === totalPaginas) ? null :        
            <button
              type='button'
              className='button-posterior'
              onClick={paginaSiguiente}
              >
                  next &raquo;
            </button>
        }

      </div>
      
   

    </div>
  );
}

export default App;
