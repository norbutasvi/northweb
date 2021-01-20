import logo from './logo.svg';
import './style.css';
import menu from './images/menu.svg';
import close from './images/close-button.svg';
import {Helmet} from "react-helmet";
import {useState, useEffect} from 'react';

import Aside from './Aside';
import Main from './Main';

function App() {

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    const aside = document.querySelector('aside');
    const icon = document.querySelector('.btn-icon');
    const button = document.querySelector('#menu-button');

    aside.classList.toggle('active');
    button.classList.toggle('active-btn');

    if (aside.classList.contains('active')) {
      icon.src = close;
    } else {
      icon.src = menu;
    }
  }

  const handlePopup = (e) => {
    e.target.parentNode.parentNode.style.display = 'none';
  }

  return (
    <div className="App">
      <div class="msg-success">
        <div class="close-msg" onClick={handlePopup}>
          <img src={close} width="30px"/>
        </div>
        <h1>Žinutė išsiųsta</h1>
        <p>Susisieksime su Jumis artimiausiu metu nurodytu telefonu arba el. pašto adresu.</p>
      </div>
      <div class="nav-button" id="menu-button" onClick={() => handleClick()}>
        <img src={menu} width="30px" class="btn-icon"/>
      </div>
      <Aside />
      <Main />
    </div>
  );
}

export default App;
