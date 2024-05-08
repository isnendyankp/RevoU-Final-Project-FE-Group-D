import React from 'react';
import Login from '../../components/Login';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const LoginPage = () => {

    const { isAuthenticated, login, logout } = useAuth();
    const router = useRouter();

    const handleLoginSuccess = (token: string) => {
      login(token);
      router.push('/');
    };
    return (
        <>
            
                <Login onLoginSuccess={handleLoginSuccess} />
        
        </>
    );
};

export default LoginPage;