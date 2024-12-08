import React, { createContext, useContext, useState } from "react";
import { callPublicApi } from "../utils/api";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const user_id = localStorage.getItem("user_id");
    const { data, status } = await callPublicApi(
      `student/students/${user_id}`,
      "GET"
    );

    if (status === 200) {
      setUser(data);
    }
  };

  const login = async (username, password, role) => {
    const apiPath =
      role === "admin"
        ? "admin/login/"
        : role === "teacher"
        ? "teacher/login/"
        : "student/login/";
    const loginData =
      role === "admin" ? { username, password } : { username, password };
    try {
      const { data, status } = await callPublicApi(apiPath, "POST", loginData);
      if (status === 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user_id", data.user_id);
        localStorage.setItem("role", role);
        getUser();
        return data;
      } else {
        throw new Error(data.error || "Login failed!");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  const logout = (role) => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("role");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, getUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
