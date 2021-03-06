import React from 'react';
import './style.css';
import menu from './images/menu.svg';
import phone from './images/phone_call.png';
import close from './images/close-button.svg';
import Aside from './Aside';
import Main from './Main';

function App() {

  const handleOpacity = (e) => {
    document.getElementById('number').classList.toggle('show');
  }

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

  const closePopup = (e) => {
    e.target.parentNode.parentNode.style.display = 'none';
  }

  const handleNavAppearance = (e) => {

    const button = document.querySelector('#menu-button');
    const icon = document.querySelector('.btn-icon');
    const aside = document.querySelector('aside');

    if (e.target.closest('aside')) {
        return;
    } else if (e.target.closest('.nav-button')) {
        return;
    } else {
      if (aside.classList.contains('active')) {
        aside.classList.toggle('active');
        button.classList.toggle('active-btn');
        icon.src = menu;
      } else {
        return;
      }

    }
  }

  return (
    <div className="App" onClick={(e) => handleNavAppearance(e)}>
      <div class="msg-success">
        <div class="close-msg" onClick={closePopup}>
          <img alt="" src={close} width="30px"/>
        </div>
        <h1>Žinutė išsiųsta</h1>
        <p>Susisieksime su Jumis artimiausiu metu nurodytu telefonu arba el. pašto adresu.</p>
      </div>
      <div class="nav-button" id="menu-button" onClick={() => handleClick()}>
        <img alt="" src={menu} width="30px" class="btn-icon"/>
      </div>
      <Aside />
      <Main />
      {/* <MessengerCustomerChat
        pageId="100819872017471"
        appId="269807374543748"
      /> */}
      <a href='tel:+37063631839' className='call'>
        <img alt="" src={phone} />
      </a>
      <div onClick={(e) => handleOpacity(e)} className='call-without-call'>
        <div class='number' id='number'>+37063631839</div>
        <img alt="" src={phone} />
      </div>
    </div>
  );
}

export default App;
