import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { ReactNode } from 'react';
import icon from '../../assets/icon.svg';
import './App.css';
import TitleBar from './Titlebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Hello() {
  return (
    <>
      <TitleBar />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
