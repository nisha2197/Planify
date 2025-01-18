import Navbar from './Component/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Tasks from './Component/Tasks/Tasks';
import Home from './Component/Home'
import About from './Component/About'
import LogState from './context/Logs/LogStata';
import TaskState from './context/Tasks/TaskState';

function App() {
  const [mode, setThemeMode] = useState('#40916c');
  const [isDarkModeEnabled, setDarkModeEnabled] = useState(false);
  //const[btncColor,setbtncColor] = useState('');

  const toggleThemMode = () => {
    if (mode === '#40916c') {
      setThemeMode('dark');
      setDarkModeEnabled(true);

      document.body.style.backgroundColor = '#111111';
      document.body.style.color = 'white';
    }
    else {
      setThemeMode('#40916c');
      setDarkModeEnabled(false);
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'white';
    }
  }

  const allTasks = [{
    "id": "1",
    "taskName": "January",
    "task1": "Take Bath",
    "task2": "Change chaddi",
    "task3": "Study"
  },
  {
    "id": "2",
    "taskName": "February",
    "task1": "Take Bath",
    "task2": "Change chaddi",
    "task3": "Study"
  }]

  return (
    <>
      <TaskState>
        <LogState>
          <BrowserRouter>
            <Navbar mode={mode} toggleThemMode={toggleThemMode} isDarkModeEnabled={isDarkModeEnabled} />
            <div className='container'>
              <Routes>
                <Route path='/tasks:id' element={<Tasks mode={mode} allTasks={allTasks} />} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
              </Routes>
            </div>
          </BrowserRouter>
        </LogState>
      </TaskState>
    </>
  );
}

export default App;


{/* <button onClick={() => hideComponent("shchild1")}>
                    Click here to hide GFG child1 component
                </button> */}
