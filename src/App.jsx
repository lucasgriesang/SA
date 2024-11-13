import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Pagina from './pagina/Pagina'; 
import Contato from './pagina/contato';
import Erro from './pagina/erro';
import Lixo from './pagina/lixo';   
import Tudo from './pagina/tudo';
import Gg from './pagina/gg';
import Teste from './teste/teste';
import Adm from './pagina/adm';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/pagina/Contato" element={<Contato />} /> {}
          <Route path="/pagina/Erro" element={<Erro />} /> {}
          <Route path="/pagina/Tudo" element={<Tudo />} /> {}
          <Route path="/pagina/Gg" element={<Gg />} /> {}
          <Route path="/pagina/Pagina" element={<Pagina />} /> {}
          <Route path="/pagina/lixo" element={<Lixo />} />
          <Route path="/teste/teste" element={<Teste />} />
          <Route path="/pagina/adm" element={<Adm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
