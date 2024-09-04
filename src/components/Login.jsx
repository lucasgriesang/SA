import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Link } from 'react-router-dom';

import logo from '../images/logo.png'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
   
    console.log('Login', { email, password });

navigate ('./pagina/Tudo');
    

  };

  return (
    
    <div className="auth-container">
    <div class="teste">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <img src={logo} alt="logo" style={{width: '300px',width: '200px',}} />     
        </label>
        <button type="submit" onClick={handleLogin} >Entrar</button>
        <p>
          Não tem uma conta? <a href="/signup" >Cadastre-se</a>

        </p>
     
      </form>
    </div>
    </div>
  );
};

export default Login;