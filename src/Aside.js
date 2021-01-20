import React from 'react'
import logo from './images/logo.png';
import homePage from './images/home-page.png';
import portfolio from './images/portfolio.png';
import workStation from './images/work-station.png';
import letter from './images/letter.png';
import customers from './images/customers.svg';

function Aside() {
    return (
            <aside>
                <div class="logo"><img src={logo} /></div>
                <nav>
                    <ul>
                        <a href="#pradzia">
                        <li id="home">
                            <img src={homePage} class="menu-icon" />
                            <div class="title">
                                PRADŽIA
                            </div>
                        </li>
                        </a>
                        <a href="#klientai">
                        <li id="clients">
                            <img src={customers} class="menu-icon" />
                            <div class="title">
                                KLIENTAI
                            </div>
                        </li>
                        </a>
                        <a href="#darbai">
                        <li id="portfolio">
                            <img src={portfolio} class="menu-icon" />
                            <div class="title">
                                DARBAI
                            </div>
                        </li>
                        </a>
                        <a href="#procesas">
                        <li id="process">
                            <img src={workStation} class="menu-icon"/>
                            <div class="title">
                                PROCESAS
                            </div>
                        </li>
                        </a>
                        <a href="#kontaktai">
                        <li id="contact">
                            <img src={letter} class="menu-icon" />
                            <div class="title">
                                KONTAKTAI
                            </div>
                        </li>
                        </a>
                    </ul>
                </nav>
            </aside>
    )
}

export default Aside
