// ./Component/Auth/RedirectToLogin.js
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RedirectToLogin() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return null;
}

export default RedirectToLogin;
