import React, { createContext, useContext, useState } from 'react';
import { callPublicApi } from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const getUser = () => {
        // Assuming user details are stored in localStorage after login
        const userDetails = localStorage.getItem('user');
        setUser(userDetails ? JSON.parse(userDetails) : null);
    };

    const login = async (email, password, role) => {
        const apiPath = role === 'admin' ? 'admin/login/' : role === 'teacher' ? 'teacher/login/' : 'user/login/';
        const loginData = role === 'admin' ? { username: email, password } : { email, password };
        try {
            const { data, status } = await callPublicApi(apiPath, 'POST', loginData);
            if (status === 200) {
                localStorage.setItem('user', JSON.stringify(data));
                setUser(data);
                return data;
            } else {
                throw new Error(data.error || 'Login failed!');
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, getUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
