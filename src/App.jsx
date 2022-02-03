import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link}  from 'react-router-dom';
import DriftPage from './Menu/DriftPage';
import ForzaPage from './Menu/ForzaPage';
import HomePage from './Menu/HomePage';
import TimeAttackPage from './Menu/TimeAttackPage';
import CRUD from './CRUD';
import './Menu/menu.css';

function App() {
  const [activeMenu, setActiveMenu] = useState(1)

  function onClick(evt) {
    setActiveMenu(evt.target.id);
  }

  return (
    <Router>
      <div>
        <nav className="menu">
          <Link id={1} className={activeMenu == 1 ? "menu__item menu__item-active" : "menu__item"} to="/" onClick={onClick}>Главная</Link>
          <Link id={2} className={activeMenu == 2 ? "menu__item menu__item-active" : "menu__item"} to="/drift" onClick={onClick}>Дрифт-такси</Link>
          <Link id={3} className={activeMenu == 3 ? "menu__item menu__item-active" : "menu__item"} to="/timeattack" onClick={onClick}>Time Attack</Link>
          <Link id={4} className={activeMenu == 4 ? "menu__item menu__item-active" : "menu__item"} to="/forza" onClick={onClick}>Forza Karting</ Link>
          <Link id={5} className={activeMenu == 5 ? "menu__item menu__item-active" : "menu__item"} to="/crud" onClick={onClick}>CRUD</ Link>
        </nav>
        <div className="page">
          <Routes>
            <Route path="/" exact element={<HomePage/>} />
            <Route path="/drift" exact element={<DriftPage/>} />
            <Route path="/timeattack" exact element={<TimeAttackPage/>} />
            <Route path="/forza" exact element={<ForzaPage/>} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;
