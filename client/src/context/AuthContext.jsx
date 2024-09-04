import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { set } from "date-fns";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  isLoggedIn: false,
  user: null,
  role: null,
  loading: true,
  login: () => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:3000/api/auth/me", {
          headers: {
            Authorization: `${token}`,
          },
        });
        const data = response.data.data;
        console.log(data);
        setRole(data.user.role);
        setUser(data.user.email);
        setIsLoggedIn(true);
        setLoading(false);
        if (role === "user") {
          navigate("/user-dashboard");
        } else if (role === "admin") {
          navigate("/admin-dashboard");
        }
      } catch (e) {
        console.log(e);
        setIsLoggedIn(false);
        setLoading(false);
      }
    }
    if (token) {
      fetchData();
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  // Check for existing login state in Local Storage on component mount

  const login = (data) => {
    console.log(data);
    window.localStorage.setItem("token", data.token);
    setRole(data.role);
    setUser(data.user);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setRole(null);
    setUser(null);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, user, loading, role, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
