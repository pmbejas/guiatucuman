import React, {useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Principal } from './paginas/principal';
import { Guias } from './paginas/guia';
import { Proyecto } from './paginas/proyecto';
import { Layout } from './paginas/layout';
import { Zona } from './paginas/zona';
import { Sector } from './paginas/sector';
import { Notas } from './paginas/notas'
import './App.css';

function App() {
  const [zonas,setZonas]=useState([]);
  const [sectores, setSectores]=useState([]);
  const [errorZonas, setErrorZonas]=useState(null);
  const [errorSectores, setErrorSectores]=useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getZonas = async ()=>{
    await fetch('guiatucuman/data/zonas.json')
      .then( response => response.json())
      .then(datos => {
              setZonas(datos)
      })
      .catch (err => {
          setErrorZonas(err);
      });
  }
  
  const getSectores = async () => {
    await fetch('guiatucuman/data/sectores.json')
      .then(response => response.json())
      .then(datos => {
              setSectores(datos);
      })
      .catch (err => {
          setErrorSectores("Error en la lectura de los sectores");
      });
  }

    useEffect(()=>{
      setIsLoading(true)
      getZonas()
      getSectores();
      setIsLoading(false)
    },[])
    
  if (errorZonas) {
      return (
          <div className="contenedor">
              <div className="seccion-titulo-guias">
                  <h1>Error Zonas</h1>
                  <p>
                      ERROR: {errorZonas.message} 
                  </p>
              </div>
          </div> 
      )
  }

  if (errorSectores) {
    return (
        <div className="contenedor">
            <div className="seccion-titulo-guias">
                <h1>Error Sectores</h1>
                <p>
                    ERROR: {errorSectores.message} 
                </p>
            </div>
        </div> 
    )
  }

  if (isLoading) {
    return (
        <div>
            Cargando...
        </div>

    )
  }

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Principal />} />
          <Route path="/guia" element={<Guias zonas={zonas} />} />
          <Route path="/proyecto" element={<Proyecto />} />
          <Route path="/guia/:slug" element={<Zona zonas={zonas} sectores={sectores} />} />
          <Route path="/guia/sectores/:slug" element={<Sector zonas={zonas} sectores={sectores}/>} />
          <Route path="/notas" elemnt={<Notas />} />
        </Route>
      </Routes>      
  );
}

export default App;
