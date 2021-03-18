import React, { useState, useEffect } from 'react';

import './App.css';

import Formulario from './components/Formulario/Formulario';
import ListadoImages from './components/Images/ListadoImages';
import ListadoVideos from './components/Videos/ListadoVideos';


function App() {

  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);
  const [ videos, guardarVideos ] = useState([]);

  const [ selectmedia, guardarSelectMedia ] = useState('')

  const [ paginaActual, guardarPaginaActual ] = useState(1);
  const [ totalPaginas, guardarTotalPaginas ] = useState(1);

  

  useEffect(() => {
    
    const consultarApi = async() => {
      
      if(busqueda === '') return;

      const imagesPerPage = 30;
      const key = '15980012-981f41cd5920ac3ee2112a85d';
      const urlphoto = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagesPerPage}&page=${paginaActual}`;
      const urlvideos = `https://pixabay.com/api/videos/?key=${key}&q=${busqueda}&per_page=${imagesPerPage}`;

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


  // Mover hacia arriba
  const goingUp = document.querySelector('.main-wrapper')

  return (
    <div className="main-wrapper">
      
      <Formulario 
        guardarBusqueda={guardarBusqueda}
        guardarSelectMedia={guardarSelectMedia}
      />

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



      <div className="">

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
              className='button-anterior'
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
