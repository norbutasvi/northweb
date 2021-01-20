
window.addEventListener('load', () => {
    
    // SECTIONS
    const sections = [];
    sections.push(document.querySelector('.section__col-2'));
    sections.push(document.querySelector('.section__testimonials'));
    sections.push(document.querySelector('.section__portfolio'));
    sections.push(document.querySelector('.section__process'));
    sections.push(document.querySelector('.section__contact'));

    // BUTTONS
    const buttons = [];
    buttons.push(document.querySelector('#home'));
    buttons.push(document.querySelector('#clients'));
    buttons.push(document.querySelector('#portfolio'));
    buttons.push(document.querySelector('#process'));
    buttons.push(document.querySelector('#contact'));


    function resetColors() {
        buttons.forEach(section => {
            section.style.background = 'transparent';
        })
    }

    const options = {
        root: null,
        threshold: 0,
        rootMargin: '0px'
    };
    const observer = new IntersectionObserver(function(entries,observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resetColors();
                if (entry.target.classList.contains('section__col-2')) {
                    const home = document.querySelector('#home');
                    home.style.background = '#0C729E';
                }
                if (entry.target.classList.contains('section__testimonials')) {
                    const home = document.querySelector('#clients');
                    home.style.background = '#0C729E';
                }
                if (entry.target.classList.contains('section__portfolio')) {
                    const home = document.querySelector('#portfolio');
                    home.style.background = '#0C729E';
                }
                if (entry.target.classList.contains('section__process')) {
                    const home = document.querySelector('#process');
                    home.style.background = '#0C729E';
                }
                if (entry.target.classList.contains('section__contact')) {
                    const home = document.querySelector('#contact');
                    home.style.background = '#0C729E';
                }
                
            } else {
                if (entry.target.classList.contains('section__col-2')) {
                    const home = document.querySelector('#home');
                    home.style.background = 'transparent';
                }
                if (entry.target.classList.contains('section__testimonials')) {
                    const home = document.querySelector('#clients');
                    home.style.background = 'transparent';
                }
                if (entry.target.classList.contains('section__portfolio')) {
                    const home = document.querySelector('#portfolio');
                    home.style.background = 'transparent';
                }
                if (entry.target.classList.contains('section__process')) {
                    const home = document.querySelector('#process');
                    home.style.background = 'transparent';
                }
                if (entry.target.classList.contains('section__contact')) {
                    const home = document.querySelector('#contact');
                    home.style.background = 'transparent';
                }
            }
        })
    }, options);

    // OBSERVE
    sections.forEach(section => {
        observer.observe(section)
    });

    // FIXING TEXTAREA
    const formBlock = document.querySelector('.info-box');
    const height = formBlock.scrollHeight;

    const textArea = document.querySelector('#message');
    textArea.style.height = (height-60.8)+'px';

    // RESPONSIVE NAV
    const menuButton = document.querySelector('#menu-button');
    const aside = document.querySelector('aside');

    // menuButton.addEventListener('click', (e) => {
    //     if (aside.classList.contains('active')) {
    //         menuButton.innerHTML = '<img src="images/menu.svg" width="40px" />';
    //         aside.classList.toggle('active');
    //         menuButton.classList.toggle('active-btn');
    //     } else {
    //         menuButton.innerHTML = '<img src="images/close-button.svg" width="40px" />';
    //         aside.classList.toggle('active');
    //         menuButton.classList.toggle('active-btn');
    //     }
    // })

})