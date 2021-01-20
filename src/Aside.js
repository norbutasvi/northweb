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
                <div class="logo"><img alt="" src={logo} /></div>
                <nav>
                    <ul>
                        <a href="#pradzia">
                        <li id="home">
                            <img alt="" src={homePage} class="menu-icon" />
                            <div class="title">
                                PRADŽIA
                            </div>
                        </li>
                        </a>
                        <a href="#klientai">
                        <li id="clients">
                            <img alt="" src={customers} class="menu-icon" />
                            <div class="title">
                                KLIENTAI
                            </div>
                        </li>
                        </a>
                        <a href="#darbai">
                        <li id="portfolio">
                            <img alt="" src={portfolio} class="menu-icon" />
                            <div class="title">
                                DARBAI
                            </div>
                        </li>
                        </a>
                        <a href="#procesas">
                        <li id="process">
                            <img alt="" src={workStation} class="menu-icon"/>
                            <div class="title">
                                PROCESAS
                            </div>
                        </li>
                        </a>
                        <a href="#kontaktai">
                        <li id="contact">
                            <img alt="" src={letter} class="menu-icon" />
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
