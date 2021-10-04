import sniurai from './images/sniurai.jpg';
import ecotrip from './images/ecotrip.png';
import audenis_fb from './images/audenis_fb.png';
import audenis_cover from './images/audenis_cover.jpg';
import sniurai_cover from './images/sniurai_cover.jpg';
import ecotrip_cover from './images/ecotrip_cover.jpg';
import like from './images/like.png';
import vector from './images/vector.PNG';
import uvlc_logo3 from './images/uvlc_logo3.PNG';


function getPostsData() {
    return [
        {
        profile: {
            url: 'https://www.facebook.com/Ukmerg%C4%97s-Versm%C4%97s-Lang%C5%B3-Centras-260619665835013',
            photo: vector,
            name: 'Ukmergės versmės langų centras',
            description: 'Įmonė',
            pageLikes: '112',
            cover: uvlc_logo3
        },
        date: '2021 m. rugsėjo 19 d.',
        comment: "Kūrėjai puikiai suprato kokios svetainės mes norime, vyko nuolatinė sklandi komunikacija, kas yra pagirtina. Svarbiausia - pasiūlė gerą kainą lyginant su kitomis įmonėmis.",
        isLiked: false,
        likes: 2,
        comments: 0,
        shares: 0,
        smile: <img alt="" src={like} height="16px"/>
        },
        {
            profile: {
                url: 'https://www.facebook.com/audenis.lt',
                photo: audenis_fb,
                name: 'Viešbutis ,,Audenis"',
                description: 'Kurortinis viešbutis',
                pageLikes: '1679',
                cover: audenis_cover
            },
            date: '2021 m. sausio 12 d.',
            comment: "Aciu uz svetaine. Puikiai ir operatyviai atliktas darbas :)",
            isLiked: false,
            likes: 2,
            comments: 0,
            shares: 0,
        },
        {
            profile: {
                url: 'https://www.facebook.com/sodyba.sniurai/',
                photo: sniurai,
                name: 'Kaimo sodyba "Šniūrai"',
                description: 'Turizmo sodyba',
                pageLikes: '1246',
                cover: sniurai_cover
            },
            date: '2020 m. spalio 10 d.',
            comment: "Sukūrė puikią reklaminę svetainę mano sodybai, už darbus sumokėjome tik 80 eurų tad tikrai nepermokėta",
            isLiked: false,
            likes: 1,
            comments: 0,
            shares: 0
        },
        {
            profile: {
                url: 'https://www.facebook.com/Ecotrip.lt',
                photo: ecotrip,
                name: 'Ecotrip Vežėjai Lietuva - Anglija - Lietuva',
                description: 'Krovinių gabenimo kompanija',
                pageLikes: '2465',
                cover: ecotrip_cover
            },
            date: '2020 m. rugpjūčio 8 d.',
            comment: `Komanda, kuri gerai ismano savo darba`,
            isLiked: false,
            likes: 2,
            comments: 0,
            shares: 0,
            smile: <img alt="" src={like} height="20px"/>
        }
    ]
}

export default getPostsData
