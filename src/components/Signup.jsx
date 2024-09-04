import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Link } from 'react-router-dom';
import logo from '../images/logo.png'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    navigate ('../pagina/Tudo');
    console.log('Login', { email, password });

  };
  return (
    <div className="auth-container">
      <div class="teste">
      <h2 className='titulos'> Cadastro </h2><br />
      <form onSubmit={handleSignup}>
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
        </label>
        <label>
          Confirmar Senha:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

        </label>
        <button type="submit" onClick={handleSignup}  >Cadastrar</button><br />
        <img src={logo} alt="logo" style={{width: '300px',width: '200px',}} />     

        <p>
          Já tem uma conta? <a href="/">Entrar</a>
        </p>
       
      </form>
    </div>
    </div>
  );
};

export default Signup;