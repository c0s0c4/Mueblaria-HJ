import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [errorMessage, setErrorMessage] = useState(null);

  // LOGIN
  const login = async (email, password) => {
    try {
      const res = await axios.post("http://localhost:4000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setToken(res.data.token);
      setUser(res.data.user);
      setErrorMessage(null);

      return true;
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Error al iniciar sesión");
      return false;
    }
  };

  // REGISTER
  const register = async (formData) => {
    try {
      const res = await axios.post(
        "http://localhost:4000/api/auth/register",
        formData
      );
      setErrorMessage(null);
      return true;
    } catch (err) {
      setErrorMessage(err.response?.data?.message || "Error en el registro");
      return false;
    }
  };

  // LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  // CHECK TOKEN AL REFRESCAR
  const checkToken = async () => {
    if (!token) return;

    try {
      const res = await axios.get(
        "http://localhost:4000/api/auth/profile",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUser(res.data.user);
    } catch (err) {
      logout();
    }
  };

  useEffect(() => {
    checkToken();
    // eslint-disable-next-line
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        login,
        register,
        logout,
        errorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// ⚡ ESTA ES LA PARTE QUE TE FALTABA ⚡
export const useAuth = () => useContext(AuthContext);
