import Navbar from './Component/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, useNavigate } from 'react';
import Tasks from './Component/Tasks/Tasks';
import Home from './Component/Home'
import About from './Component/About'
import LogState from './context/Logs/LogState';
import TaskState from './context/Tasks/TaskState';
import Login from './Component/Auth/Login';
import AuthRoute from './Component/Auth/AuthRoute';
import AuthState from './context/Auth/AuthState';
import SignUp from './Component/Auth/SignUp';
import RedirectToLogin from './Component/Auth/RedirectToLogin';
import PrivateLayout from './Component/Layouts/PrivateLayout';

function App() {
  const [mode, setThemeMode] = useState('#40916c');
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);
  
  // Load theme from localStorage on page load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setThemeMode('dark');
      setDarkModeEnabled(true);
      document.body.style.backgroundColor = '#111111';
      document.body.style.color = 'white';
    } else {
      setThemeMode('#40916c');
      setDarkModeEnabled(false);
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'white';
    }
  }, []);

  const toggleThemMode = () => {
    if (mode === '#40916c') {
      setThemeMode('dark');
      setDarkModeEnabled(true);
      document.body.style.backgroundColor = '#111111';
      document.body.style.color = 'white';
      localStorage.setItem('theme', 'dark');
    }
    else {
      setThemeMode('#40916c');
      setDarkModeEnabled(false);
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'white';
      localStorage.setItem('theme', 'light');
    }
  }

  // const toggleThemMode = () => {
  //   if (isDarkModeEnabled) {
  //     setThemeMode('#40916c');
  //     setDarkModeEnabled(false);
  //     localStorage.setItem('theme', 'light'); // Save light theme to localStorage
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //   } else {
  //     setThemeMode('dark');
  //     setDarkModeEnabled(true);
  //     localStorage.setItem('theme', 'dark'); // Save dark theme to localStorage
  //     document.body.style.backgroundColor = '#111111';
  //     document.body.style.color = 'white';
  //   }
  // };
  return (
    <>
      <AuthState>
        <TaskState>
          <LogState>
            <BrowserRouter>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<RedirectToLogin />} />
              <Route path="/login" element={<AuthRoute element={<Login />} publicRoute={true} />} />
              <Route path="/signup" element={<AuthRoute element={<SignUp />} publicRoute={true} />} />

              {/* Private Routes Wrapped in Layout with Navbar */}
              <Route element={
                <PrivateLayout mode={mode} toggleThemMode={toggleThemMode} isDarkModeEnabled={isDarkModeEnabled} />
              }>
                <Route path="/home" element={<AuthRoute element={<Home mode={mode} />} />} />
                <Route path="/about" element={<AuthRoute element={<About />} />} />
                <Route path="/tasks/:id" element={<AuthRoute element={<Tasks mode={mode} />} />} />
              </Route>
            </Routes>
            </BrowserRouter>
          </LogState>
        </TaskState>
      </AuthState>
    </>
  );
}

export default App;


{/* <button onClick={() => hideComponent("shchild1")}>
                    Click here to hide GFG child1 component
                </button> */}
