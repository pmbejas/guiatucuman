import React, {useState,useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Principal } from './paginas/principal';
import { Guias } from './paginas/guia';
import { Proyecto } from './paginas/proyecto';
import { Layout } from './paginas/layout';
import { Zona } from './paginas/zona';
import { Sector } from './paginas/sector';
import { Notas } from './paginas/notas'
import { getDataSectores, getDataZonas } from './Servicies/Servicios';
import './App.css';

function App() {
  const [zonas, setZonas]=useState([]);
  const [sectores, setSectores]=useState([]);

  const getZonas = async () => setZonas(await getDataZonas().then(response => response.data));
  const getSectores = async () => setSectores( await getDataSectores().then(response => response.data));

    useEffect(()=>{
      getZonas()
      getSectores();
    })
  
  return (
      <Routes>
        <Route path="/" element={<Layout zonas={zonas} />}>
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
