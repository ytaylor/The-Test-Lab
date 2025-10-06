import React, { useState } from 'react';
import LoginForm from './LoginForm';
import '../styles/App.scss'; // Si tienes estilos, aquí irían

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('Inicia sesión para continuar.');

  /**
   * Esta función simula la llamada a la API de inicio de sesión.
   * Es la función 'onSubmit' que se le pasa al LoginForm.
   * * @param {object} credentials - Un objeto que contiene { username, password }
   */
  const handleLogin = (credentials) => {
    // 1. Simulación de la API: Esperamos un poco para simular la latencia de red.
    setMessage('Verificando credenciales...');

    // Usamos setTimeout para simular una llamada asíncrona real
    setTimeout(() => {
      // 2. Lógica de Simulación de Respuesta
      if (credentials.username === 'admin' && credentials.password === '12345') {
        setIsLoggedIn(true);
        setMessage(`¡Bienvenido, ${credentials.username}! Sesión iniciada.`);
      } else {
        setIsLoggedIn(false);
        setMessage('Error de inicio de sesión. Usuario o contraseña incorrectos.');
      }
    }, 1500); // Esperamos 1.5 segundos simulados
  };

  return (
    <div className="App">
      <h1>Test Lab for Devs</h1>

      {/* Muestra el mensaje de estado de la aplicación */}
      <div className={`status-message ${isLoggedIn ? 'success' : 'error'}`}>
        {message}
      </div>

      <hr />

      {/* Renderiza el LoginForm si el usuario no ha iniciado sesión */}
      {!isLoggedIn ? (
        <LoginForm onSubmit={handleLogin} />
      ) : (
        <button onClick={() => setIsLoggedIn(false)}>
          Cerrar Sesión
        </button>
      )}
    </div>
  );
}

export default App;