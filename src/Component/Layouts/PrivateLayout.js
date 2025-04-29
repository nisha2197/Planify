// ./Component/Layout/PrivateLayout.js
import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

const PrivateLayout = ({ mode, toggleThemMode, isDarkModeEnabled }) => {
  return (
    <>
      <Navbar mode={mode} toggleThemMode={toggleThemMode} isDarkModeEnabled={isDarkModeEnabled} />
      <Outlet />
    </>
  );
};

export default PrivateLayout;
