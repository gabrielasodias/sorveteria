import './Login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Validação simples de teste para acessar página de estoque
    if (username === 'colaborador-teste' && password === 'senha123teste') {
      navigate('/stock');
    } else {
      alert('Credenciais inválidas');
    }
  };

  return (

    <div className="login-container">
        
        <form onSubmit={handleLogin} className="login-form">
            <h1>Login</h1>
            <p>Acesse a área de gerenciamento de estoque</p>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}placeholder="Usuário"/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha"/>
            <button type="submit">Entrar</button>
        </form>
    </div>
  );
}

export default Login;