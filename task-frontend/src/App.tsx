import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import CreateTaskPage from './components/IndexTaskPage';
import LoginTask from './components/LoginTask';
import { ApiService, UserProfile } from './service/apiService'; // Asegúrate de importar correctamente UserProfile desde la ubicación correcta

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null); // Estado para almacenar el perfil del usuario

  useEffect(() => {
    // Al cargar la página, intenta recuperar el token del localStorage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setIsLoggedIn(true);
      // Obtener y guardar el perfil del usuario al iniciar sesión
      fetchUserProfile();
    }
  }, []);

  const handleLoginSuccess = async (userToken: string) => {
    localStorage.setItem("token", userToken);
    setIsLoggedIn(true);
    // Obtener y guardar el perfil del usuario al iniciar sesión
    fetchUserProfile();
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUserProfile(null); // Reiniciar el estado del perfil del usuario al cerrar sesión
  };

  const fetchUserProfile = async () => {
    try {
      const response = await ApiService.getUserProfile();
      setUserProfile(response.data);
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  };

  return (
    <>
      {!isLoggedIn ? (
        <LoginTask onLoginSuccess={handleLoginSuccess} />
      ) : (
        <>
          <Header onLogout={handleLogout} userProfile={userProfile} /> {/* Pasar el perfil de usuario al componente Header */}
          <CreateTaskPage />
        </>
      )}
    </>
  );
};

export default App;
