import './App.css';

import { Routes, Route } from 'react-router-dom';
import { Principal } from './paginas/principal';
import { Guias } from './paginas/guia';
import { Proyecto } from './paginas/proyecto';
import { Layout } from './paginas/layout';
import { Zona } from './paginas/zona';
import { Sector } from './paginas/sector';
import { Notas } from './paginas/notas'

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Principal />} />
          <Route path="/guia" element={<Guias />} />
          <Route path="/proyecto" element={<Proyecto />} />
          <Route path="/guia/:slug" element={<Zona />} />
          <Route path="/guia/sectores/:slug" element={<Sector />} />
          <Route path="/notas" elemnt={<Notas />} />
        </Route>
      </Routes>      
  );
}

export default App;
