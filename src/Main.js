import React, { useEffect, useState, useRef } from 'react'
import Header from './Header';
import Review from './Review';
import getPostsData from './posts';
import Form from './Form';
import axios from 'axios';
import { browserName } from 'react-device-detect';

// IMAGES
import logo from './images/logo.png';
import euro from './images/eurosvg.svg';
import workFromHome from './images/work-from-home.svg';
import duration from './images/duration.svg';
import completed from './images/completed.png';
import statistics from './images/statistics.png';
import prototype from './images/prototype.png';
import paintPalette from './images/paint-palette.svg';
import wordpress from './images/wordpress.png';
import upload from './images/upload.png';
import database from './images/database.png';
import statisticsSvg from './images/statistics.svg';
import research from './images/research.png';
import search from './images/search.svg';
import altitude from './images/altitude.png';
import sniurai from './images/sniurai.jpg';
import audenis from './images/audenis.png';
import ecotrip from './images/ecotrip.png';
import kaunodalys_logo from './images/kaunodalys-logo.PNG';
import fb_icon from './images/fb_icon.png';
import audenis_website from './images/audenis_website.png';
import altitude_website from './images/altitude_website.png';
import ecotrip_website from './images/ecotrip_website.png';
import sniurai_website from './images/sniurai_website.png';
import kaunodalys_website from './images/kaunodalys_website.png';
import google_analytics from './images/google.svg';
import designer from './images/designer.jpg';
import programmer from './images/programmer.jpg';
import programmer2 from './images/programmer2.jpg';
import picture from './images/picture.svg';
import slider from './images/slider.svg';
import contact from './images/contact.svg';
import google_maps from './images/google-maps.svg';
import facebook from './images/facebook.svg';
import messenger from './images/messenger.svg';
import schedule from './images/schedule.svg';
import languages from './images/languages.png';
import worldwithoutviruses from './images/worldwithoutviruses.png';
import vision_image from './images/vision_image.jpg';
import uvlc_website from './images/uvlc_website.png';
// import partners from './images/partners.jpg';
import uvlc_logo3 from './images/uvlc_logo3.PNG';

function Main({ location }) {

    const didMount = useRef(false);

    const posts = getPostsData();
    console.log(location);

    // const createPost = async () => {
    //     axios.post('https://pilviskiai-adminarea.herokuapp.com/info', {
    //         "ip": data.ip,
    //         "country_code": data.country_code,
    //         "country_name": data.country_name,
    //         "city":data.city,
    //         "postal":data.postal,
    //         "latitude":data.latitude,
    //         "longitude":data.longitude,
    //         "state":data.state,
    //         "browser": data.browser
    //     })
    //     .then(res => console.log(res.data));
    // }

    const [data, setData] = useState({
        ip: '',
        country_code: '',
        country_name: '',
        city: '',
        postal: '',
        latitude: '',
        longitude: '',
        state: '',
        browser: ''
    });
    

    const getData = async () => {
        axios.get('https://geolocation-db.com/json/')
        .then(res => {
            setData({
                ip: res.data.IPv4,
                country_code: res.data.country_code,
                country_name: res.data.country_name,
                city:res.data.city,
                postal:res.data.postal,
                latitude:res.data.latitude,
                longitude:res.data.longitude,
                state:res.data.state,
                browser: browserName
            })
        });
    }

    useEffect(() => {
        if (new URLSearchParams(window.location.search).get("hello")) {
            console.log('found param')
            getData();
        } else {
            console.log('not found param')
        }
    }, [])

    useEffect(() => {
        if (didMount.current) {
        const postData = () => {
            axios.post('https://pilviskiai-adminarea.herokuapp.com/infos', {
                ip: data.ip,
                country_code: data.country_code,
                country_name: data.country_name,
                city:data.city,
                postal:data.postal,
                latitude:data.latitude.toString(),
                longitude:data.longitude.toString(),
                state:data.state,
                browser: browserName
            }, {
                headers: {
                    'Content-Type':'application/json',
                    'Accept': 'application/json'
                }
            })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
        }

        postData();
        console.log(data)
    } else {
        didMount.current = true;
    }
    }, [data])

    return (
        <div class="main__container">
            <Header />
            <div class="section__col-2">
                <div class="logo-separator"></div>
                <div class="section__wrapper">
                    <div class="left">
                        <p>
                        Sukursime Jums išskirtinai modernios išvaizdos interneto svetainę, siekiant padidinti Jūsų paslaugų ar prekių pardavimus. Kainos ir kokybės santykį garantuojame.
                        </p>
                        <div className="info">
                            Naudojame naujausią web kūrimo technologiją, kurios dėka nereikia mokėti už hostingo (talpinimo) paslaugą ir svetainė veikia labai sparčiai, o tai reiškia, kad SEO (svetainės matomumo paieškose) rezultatai jus nustebins.
                        </div>
                        <div class="buttons">
                            <a href="#kontaktai">
                                <div class="btn-primary">UŽSAKYTI</div>
                            </a>
                            <a href="#darbai">
                                <div class="btn-secondary">DARBŲ GALERIJA</div>
                            </a>
                        </div>
                    </div>
                    <div class="right">
                        <img alt="" src={vision_image} class="hero-image"/>
                    </div>
                </div>
            </div>
            <div class="section__col-3">
                <div class="item">
                    <img alt="" src={euro} width="64px"/>
                    <p>
                    Patirtis su įvairaus sudėtingumo projektais leis Jums pasiūlyti gerą kainos ir kokybės
                    santykį. Kiekvieno projekto kaina pas mus - <span> nuo 80 eurų</span>. 
                    Mokate tik tada, jeigu atliktas darbas Jus tenkina.
                    </p>
                </div>
                <div class="item">
                    <img alt="" src={workFromHome} width="64px"/>
                    <p>
                    Darbą atliksime pagal Jūsų individualius pageidavimus, 
                    mūsų pasiūlymus ar Jums patikusius pavyzdžius.
                    </p>
                </div>
                <div div class="item">
                    <img alt="" src={duration} width="64px"/>
                    <p>
                    Kadangi projektui skiriamas didelis dėmesys dizaino 
                    elementams ir tinkamam funkcionalumo užbaigtumui, 
                    priklausomai nuo projekto dydžio, darbų trukmė -
                    <span> nuo 1 iki 2 savaičių</span>.
                    </p>
                </div>
            </div>
            <div class="section__team">
                <h2 class="text-center">KOMANDA</h2>
                <div class="wrapper">
                    <div class="member">
                        <img src={programmer} alt="" class="staff-img"/>
                        <div class="info">
                            <h3>Vilius</h3>
                            <p>Įkūrėjas ir programuotojas</p>
                        </div>
                    </div>
                    <div class="member">
                        <img src={programmer2} alt="" class="staff-img"/>
                        <div class="info">
                            <h3>Marius</h3>
                            <p>Programuotojas</p>
                        </div>
                    </div>
                    <div class="member">
                        <img src={designer} alt="" class="staff-img"/>
                        <div class="info">
                            <h3>Rolandas</h3>
                            <p>Dizaineris</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section__testimonials" id="klientai">
                <div class="logo-separator"></div>
                <h2 class="text-center">KLIENTAI</h2>
                <div class="container">
                    <div class="content flex-col">
                        <div class="item">
                            <img alt="" src={altitude} width="200px" />
                        </div>
                        <div class="item">
                            <img alt="" src={audenis} height="120px" />
                        </div>
                        <div class="item">
                            <img alt="" src={sniurai} class="icon" />
                        </div>
                        <div class="item">
                            <img alt="" src={ecotrip} class="icon centered"/>
                        </div>
                        <div class="item">
                            <img alt="" src={uvlc_logo3} height="90px" />
                        </div>
                        <div class="item">
                            <img alt="" src={kaunodalys_logo} height="90px" />
                        </div>
                    </div>
                    <div class="content flex-center">
                        <div class="fb-feed">
                            <div class="cover">
                                <img alt="" src={fb_icon} class="absolute"/>
                                <img alt="" src={logo} />
                            </div>
                            <div class="testimonials">
                                {posts.map(post => <Review post={post} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section__portfolio" id="darbai">
                <div class="logo-separator"></div>
                <div class="wrapper">
                    <h2 class="text-center">PROJEKTAI</h2>
                    <div class="project">
                        <h2 class="project__title">UVLC.LT</h2>
                        <p class="project__description">Langų ir medienos darbų svetainė</p>
                        <div class="content">
                            <a href="https://uvlc.lt" class="content__image">
                                <div class="background">
                                </div>
                                <div class="text">
                                    <img alt="" src={search} height="26px"/>
                                    NARŠYTI GYVAI
                                </div>
                                <img alt="" src={uvlc_website} />
                            </a>
                            <div class="content__completed">
                                <div class="box">
                                    <div class="box__top">
                                        <div class="box__top__icon">
                                            <img alt="" src={completed} />
                                        </div>
                                        <div class="box__top__title">
                                            ATLIKTI DARBAI
                                        </div>
                                    </div>
                                    <div class="box__content">
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={paintPalette} />
                                                </div>
                                                <p>Svetainės dizainas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={wordpress} />
                                                </div>
                                                <p>Turinio valdymo sistemos diegimas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={upload} />
                                                </div>
                                                <p>Turinio sukėlimas į svetainę</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={database} />
                                                </div>
                                                <p>Svetainės failų patalpinimas į serverį</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={statisticsSvg} />
                                                </div>
                                                <p>SEO optimizavimas paieškos sistemoms</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={research} />
                                                </div>
                                                <p>Svetainės priežiūra ir administravimas</p>
                                            </li>
                                        </ul>
                                        <div class="other-works">Kiti darbai</div>
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={contact} />
                                                </div>
                                                <p>Įdiegta kontaktų forma.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={slider} />
                                                </div>
                                                <p>Įdiegtas slaiderio komponentas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={google_analytics} />
                                                </div>
                                                <p>įdiegtas google analytics modulis leidžiantis stebėti vartotojų srautą ir daryti 
                                                jų veiklos svetainėje analizę.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={picture} />
                                                </div>
                                                <p>
                                                    Įdiegtas nuotraukų galerijos modulis.
                                                </p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={google_maps} />
                                                </div>
                                                <p>
                                                    Įdiegtas interaktyvus google maps žemėlapis.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project">
                        <h2 class="project__title">ALTITUDE.LT</h2>
                        <p class="project__description">Statybos darbų svetainė</p>
                        <div class="content">
                            <a href="https://altitude.lt" class="content__image">
                                <div class="background">
                                </div>
                                <div class="text">
                                    <img alt="" src={search} height="26px"/>
                                    NARŠYTI GYVAI
                                </div>
                                <img alt="" src={altitude_website} />
                            </a>
                            <div class="content__completed">
                                <div class="box">
                                    <div class="box__top">
                                        <div class="box__top__icon">
                                            <img alt="" src={completed} />
                                        </div>
                                        <div class="box__top__title">
                                            ATLIKTI DARBAI
                                        </div>
                                    </div>
                                    <div class="box__content">
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt=""  src={statistics} />
                                                </div>
                                                <p>Analizė ir tikslų nustatymas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={prototype} />
                                                </div>
                                                <p>Svetainės prototipo sudarymas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={paintPalette} />
                                                </div>
                                                <p>Svetainės dizainas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={wordpress} />
                                                </div>
                                                <p>Turinio valdymo sistemos diegimas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt=""src={upload} />
                                                </div>
                                                <p>Turinio sukėlimas į svetainę</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={database} />
                                                </div>
                                                <p>Svetainės failų patalpinimas į serverį</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={statisticsSvg} />
                                                </div>
                                                <p>SEO optimizavimas paieškos sistemoms</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={research} />
                                                </div>
                                                <p>Svetainės priežiūra ir administravimas</p>
                                            </li>
                                        </ul>
                                        <div class="other-works">Kiti darbai</div>
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={contact} />
                                                </div>
                                                <p>Įdiegta kontaktų forma.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={slider} />
                                                </div>
                                                <p>Įdiegti du slaiderių komponentai.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={google_analytics} />
                                                </div>
                                                <p>įdiegtas google analytics modulis leidžiantis stebėti vartotojų srautą ir daryti 
                                                jų veiklos svetainėje analizę.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={picture} />
                                                </div>
                                                <p>
                                                    Įdiegtas atliktų darbų nuotraukų galerijos modulis.
                                                </p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={google_maps} />
                                                </div>
                                                <p>
                                                    Įdiegtas interaktyvus google maps žemėlapis.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project">
                        <h2 class="project__title">AUDENIS.LT</h2>
                        <p class="project__description">Kurortinio viešbučio svetainė</p>
                        <div class="content">
                            <a href="http://audenis.lt" class="content__image">
                                <div class="background">
                                </div>
                                <div class="text">
                                    <img alt="" src={search} height="26px"/>
                                    NARŠYTI GYVAI
                                </div>
                                <img alt="" src={audenis_website} />
                            </a>
                            <div class="content__completed">
                                <div class="box">
                                    <div class="box__top">
                                        <div class="box__top__icon">
                                            <img alt="" src={completed} />
                                        </div>
                                        <div class="box__top__title">
                                            ATLIKTI DARBAI
                                        </div>
                                    </div>
                                    <div class="box__content">
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={statistics} />
                                                </div>
                                                <p>Analizė ir tikslų nustatymas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={prototype} />
                                                </div>
                                                <p>Svetainės prototipo sudarymas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={paintPalette} />
                                                </div>
                                                <p>Svetainės dizainas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={wordpress} />
                                                </div>
                                                <p>Turinio valdymo sistemos diegimas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={upload} />
                                                </div>
                                                <p>Turinio sukėlimas į svetainę</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={database} />
                                                </div>
                                                <p>Svetainės failų patalpinimas į serverį</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={statisticsSvg} />
                                                </div>
                                                <p>SEO optimizavimas paieškos sistemoms</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={research} />
                                                </div>
                                                <p>Svetainės priežiūra ir administravimas</p>
                                            </li>
                                        </ul>
                                        <div class="other-works">Kiti darbai</div>
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={contact} />
                                                </div>
                                                <p>Įdiegta kontaktų forma.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={slider} />
                                                </div>
                                                <p>Įdiegtas slaiderio komponentas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={google_analytics} />
                                                </div>
                                                <p>įdiegtas google analytics modulis leidžiantis stebėti vartotojų srautą ir daryti 
                                                jų veiklos svetainėje analizę.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={picture} />
                                                </div>
                                                <p>
                                                    Įdiegtas nuotraukų galerijos modulis.
                                                </p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={google_maps} />
                                                </div>
                                                <p>
                                                    Įdiegtas interaktyvus google maps žemėlapis.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project">
                        <h2 class="project__title">ECOTRIP.LT</h2>
                        <p class="project__description">Krovinių gabenimo svetainė</p>
                        <div class="content">
                            <a href="https://ecotrip.lt" class="content__image">
                                <div class="background">
                                </div>
                                <div class="text">
                                    <img alt="" src={search} height="26px"/>
                                    NARŠYTI GYVAI
                                </div>
                                <img alt="" src={ecotrip_website} />
                            </a>
                            <div class="content__completed">
                                <div class="box">
                                    <div class="box__top">
                                        <div class="box__top__icon">
                                            <img alt="" src={completed} />
                                        </div>
                                        <div class="box__top__title">
                                            ATLIKTI DARBAI
                                        </div>
                                    </div>
                                    <div class="box__content">
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={statistics} />
                                                </div>
                                                <p>Analizė ir tikslų nustatymas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={prototype} />
                                                </div>
                                                <p>Svetainės prototipo sudarymas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={wordpress} />
                                                </div>
                                                <p>Turinio valdymo sistemos diegimas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={upload} />
                                                </div>
                                                <p>Turinio sukėlimas į svetainę</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={database} />
                                                </div>
                                                <p>Svetainės failų patalpinimas į serverį</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={statisticsSvg} />
                                                </div>
                                                <p>SEO optimizavimas paieškos sistemoms</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={research} />
                                                </div>
                                                <p>Svetainės priežiūra ir administravimas</p>
                                            </li>
                                        </ul>
                                        <div class="other-works">Kiti darbai</div>
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={languages} />
                                                </div>
                                                <p>Įdiegtas daugiakalbystės modulis.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={schedule} />
                                                </div>
                                                <p>Įdiegtas interaktyvus tvarkarštis.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={facebook} />
                                                </div>
                                                <p>Integruoti socialiniai tinklai.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={messenger} />
                                                </div>
                                                <p>Įdiegtas messenger tiesioginių pokalbių modulis.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={contact} />
                                                </div>
                                                <p>Įdiegta kontaktų forma.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={slider} />
                                                </div>
                                                <p>Įdiegti suprogramuoti du slaiderių komponentai.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={google_analytics} />
                                                </div>
                                                <p>įdiegtas google analytics modulis.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={picture} />
                                                </div>
                                                <p>
                                                    Įdiegtas nuotraukų galerijos modulis.
                                                </p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={google_maps} />
                                                </div>
                                                <p>
                                                    Įdiegtas interaktyvus google maps žemėlapis.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project">
                        <h2 class="project__title">SODYBA-SNIURAI.LT</h2>
                        <p class="project__description">Kaimo turizmo sodybos svetainė</p>
                        <div class="content">
                            <a href="http://sodyba-sniurai.lt" class="content__image">
                                <div class="background">
                                </div>
                                <div class="text">
                                    <img alt="" src={search} height="26px"/>
                                    NARŠYTI GYVAI
                                </div>
                                <img alt="" src={sniurai_website} />
                            </a>
                            <div class="content__completed">
                                <div class="box">
                                    <div class="box__top">
                                        <div class="box__top__icon">
                                            <img alt="" src={completed} />
                                        </div>
                                        <div class="box__top__title">
                                            ATLIKTI DARBAI
                                        </div>
                                    </div>
                                    <div class="box__content">
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={statistics} />
                                                </div>
                                                <p>Analizė ir tikslų nustatymas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={prototype} />
                                                </div>
                                                <p>Svetainės prototipo sudarymas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={paintPalette} />
                                                </div>
                                                <p>Svetainės dizainas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={wordpress} />
                                                </div>
                                                <p>Turinio valdymo sistemos diegimas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={upload} />
                                                </div>
                                                <p>Turinio sukėlimas į svetainę</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={database} />
                                                </div>
                                                <p>Svetainės failų patalpinimas į serverį</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={statisticsSvg} />
                                                </div>
                                                <p>SEO optimizavimas paieškos sistemoms</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={research} />
                                                </div>
                                                <p>Svetainės priežiūra ir administravimas</p>
                                            </li>
                                        </ul>
                                        <div class="other-works">Kiti darbai</div>
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={languages} />
                                                </div>
                                                <p>Įdiegtas daugiakalbystės modulis.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={contact} />
                                                </div>
                                                <p>Įdiegta kontaktų forma.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={google_analytics} />
                                                </div>
                                                <p>įdiegtas google analytics modulis.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={picture} />
                                                </div>
                                                <p>
                                                    Įdiegtas nuotraukų galerijos modulis.
                                                </p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={google_maps} />
                                                </div>
                                                <p>
                                                    Įdiegtas interaktyvus google maps žemėlapis.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project">
                        <h2 class="project__title">WORLDWITHOUTVIRUSES.EU</h2>
                        <p class="project__description">Oro recirkuliatorių svetainė</p>
                        <div class="content">
                            <a href="https://worldwithoutviruses.eu" class="content__image">
                                <div class="background">
                                </div>
                                <div class="text">
                                    <img alt="" src={search} height="26px"/>
                                    NARŠYTI GYVAI
                                </div>
                                <img alt="" src={worldwithoutviruses} />
                            </a>
                            <div class="content__completed">
                                <div class="box">
                                    <div class="box__top">
                                        <div class="box__top__icon">
                                            <img alt="" src={completed} />
                                        </div>
                                        <div class="box__top__title">
                                            ATLIKTI DARBAI
                                        </div>
                                    </div>
                                    <div class="box__content">
                                            <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={statistics} />
                                                </div>
                                                <p>Analizė ir tikslų nustatymas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={prototype} />
                                                </div>
                                                <p>Svetainės prototipo sudarymas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={paintPalette} />
                                                </div>
                                                <p>Svetainės dizainas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={wordpress} />
                                                </div>
                                                <p>Turinio valdymo sistemos diegimas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={upload} />
                                                </div>
                                                <p>Turinio sukėlimas į svetainę</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={database} />
                                                </div>
                                                <p>Svetainės failų patalpinimas į serverį</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={statisticsSvg} />
                                                </div>
                                                <p>SEO optimizavimas paieškos sistemoms</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={research} />
                                                </div>
                                                <p>Svetainės priežiūra ir administravimas</p>
                                            </li>
                                        </ul>
                                        <div class="other-works">Kiti darbai</div>
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt=""src={contact} />
                                                </div>
                                                <p>
                                                    Įdiegta interaktyvi patalpos kvadratūros skaičiuoklė.
                                                </p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={slider} />
                                                </div>
                                                <p>Įdiegtas slaiderio komponentas.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={google_analytics} />
                                                </div>
                                                <p>įdiegtas google analytics modulis leidžiantis stebėti vartotojų srautą ir daryti 
                                                jų veiklos svetainėje analizę.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt=""src={picture} />
                                                </div>
                                                <p>
                                                    Įdiegtas produktų galerijos modulis.
                                                </p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt=""src={languages} />
                                                </div>
                                                <p>
                                                    Įdiegtas daugiakalbystės modulis.
                                                </p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt=""src={contact} />
                                                </div>
                                                <p>
                                                    Įdiegta kontaktų forma.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="project">
                        <h2 class="project__title">KAUNODALYS.LT</h2>
                        <p class="project__description">Automobilių supirkimo ir dalių svetainė</p>
                        <div class="content">
                            <a href="https://kaunodalys.lt" class="content__image">
                                <div class="background">
                                </div>
                                <div class="text">
                                    <img alt="" src={search} height="26px"/>
                                    NARŠYTI GYVAI
                                </div>
                                <img alt="" src={kaunodalys_website} />
                            </a>
                            <div class="content__completed">
                                <div class="box">
                                    <div class="box__top">
                                        <div class="box__top__icon">
                                            <img alt="" src={completed} />
                                        </div>
                                        <div class="box__top__title">
                                            ATLIKTI DARBAI
                                        </div>
                                    </div>
                                    <div class="box__content">
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={statistics} />
                                                </div>
                                                <p>Analizė ir tikslų nustatymas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={prototype} />
                                                </div>
                                                <p>Svetainės prototipo sudarymas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={paintPalette} />
                                                </div>
                                                <p>Svetainės dizainas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={wordpress} />
                                                </div>
                                                <p>Turinio valdymo sistemos diegimas</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={upload} />
                                                </div>
                                                <p>Turinio sukėlimas į svetainę</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={database} />
                                                </div>
                                                <p>Svetainės failų patalpinimas į serverį</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={statisticsSvg} />
                                                </div>
                                                <p>SEO optimizavimas paieškos sistemoms</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={research} />
                                                </div>
                                                <p>Svetainės priežiūra ir administravimas</p>
                                            </li>
                                        </ul>
                                        <div class="other-works">Kiti darbai</div>
                                        <ul>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={google_analytics} />
                                                </div>
                                                <p>įdiegtas google analytics modulis.</p>
                                            </li>
                                            <li>
                                                <div class="icon">
                                                    <img alt="" src={google_maps} />
                                                </div>
                                                <p>
                                                    Įdiegtas interaktyvus google maps žemėlapis.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section__process" id="procesas">
                <div class="logo-separator"></div>
                <h2 class="text-center">PROCESAS</h2>
                <div class="wrapper">
                    <div class="row">
                        <div class="box">
                            <div class="box__top">
                                <div class="icon">
                                    <img alt="" src={statistics} />
                                </div>
                                <div class="title">
                                    ANALIZĖ IR TIKSLŲ NUSTATYMAS
                                </div>
                            </div>
                            <div class="box__content">
                                Kartu išsiaiškinsime ko siekia Jūsų įmonė ar vykdoma veikla, kokie yra didžiausi prioritetai, o tada kibsime į darbą.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <div class="box__top">
                                <div class="icon">
                                    <img alt="" src={prototype} />
                                </div>
                                <div class="title">
                                    PROTOTIPO SUDARYMAS
                                </div>
                            </div>
                            <div class="box__content">
                                Sukursime svetainės skeletą, kuriame bus matomas svetainės elementų išsidėstymas, jų forma ir turinys.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <div class="box__top">
                                <div class="icon">
                                    <img alt="" src={paintPalette} />
                                </div>
                                <div class="title">
                                    DIZAINAS
                                </div>
                            </div>
                            <div class="box__content">
                                Mūsų „UI / UX“ dizainerio užduotis yra sukurti estetišką ir patogų valdymą, kuris Jūsų svetainės vartotojams suteiktų galimybę lengvai suprasti, kaip naudotis įvairiais svetainės elementais. 
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <div class="box__top">
                                <div class="icon">
                                    <img alt="" src={wordpress} />
                                </div>
                                <div class="title">
                                    TVS DIEGIMAS
                                </div>
                            </div>
                            <div class="box__content">
                                Į jūsų svetainę bus įdiegta Turinio valdymo sistema (TVS), kuri naudojama patogiai valdyti svetainės turinį, leis Jums ar kitiems bendraautoriams kurti, redaguoti ir talpinti turinį. TVS turinys paprastai yra saugomas duomenų bazėje.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <div class="box__top">
                                <div class="icon">
                                    <img alt="" src={upload} />
                                </div>
                                <div class="title">
                                    TURINIO SUKĖLIMAS
                                </div>
                            </div>
                            <div class="box__content">
                                Svetainės paleidimo stadijoje Jums nereikės kelti turinio patiems. Mes sukelsime visą turimą turinį už Jus.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <div class="box__top">
                                <div class="icon">
                                    <img alt="" src={database} />
                                </div>
                                <div class="title">
                                    TALPINIMAS Į SERVERĮ
                                </div>
                            </div>
                            <div class="box__content">
                                Į Jūsų pasirinktą hostingą (serverį) patalpinsime svetainės failus ir galutinai ją paleisime.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <div class="box__top">
                                <div class="icon">
                                    <img alt="" src={statisticsSvg} />
                                </div>
                                <div class="title">
                                    SEO OPTIMIZACIJA
                                </div>
                            </div>
                            <div class="box__content">
                                Išanalizuosime Jūsų konkurenciją “google” paieškos sistemose, parinksime reikiamus raktažodžius, kurie padės iškelti svetainę paieškos sistemų rezultatuose.
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="box">
                            <div class="box__top">
                                <div class="icon">
                                    <img alt="" src={research} />
                                </div>
                                <div class="title">
                                    PRIEŽIŪRA IR ADMINISTRAVIMAS
                                </div>
                            </div>
                            <div class="box__content">
                                Pirmus du mėnesius palaikysime svetainės techninę pusę taip užtikrindami jos ilgalaikį veikimą.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section__contact" id="kontaktai">
            <div class="logo-separator"></div>
            <h2 class="text-center">KONTAKTAI</h2>
            <div class="wrapper">
                <Form />
            </div>
        </div>
        <div class="footer">
            Copyright <strong>©</strong> 2021. Sprendimas northweb.lt<br />
            <div class='tags'>Svetainiu kurimas | Tinklapiu kurimas</div>
        </div>
        </div>
    )
}

export default Main
