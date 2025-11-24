import createHomePage from "./modules/homepage";
import createMenuPage from "./modules/menu";
import createAboutPage from "./modules/about";

const contentDiv = document.querySelector('.content');

function renderPage(pageModule) {
    contentDiv.innerHTML = '';
    contentDiv.appendChild(pageModule);
}

function init() {
    renderPage(createHomePage());

    const navBtns = document.querySelector('nav');
    navBtns.addEventListener('click', (e) => {
        const btn = e.target
        if (btn.tagName !== 'BUTTON') return console.log('ERROR');

        const btnText = btn.textContent.trim().toLowerCase();

        switch (btnText) {
            case 'home': renderPage(createHomePage());
            break;
            
            case 'menu': renderPage(createMenuPage());
            break;

            case 'about': renderPage(createAboutPage());
            break;

            default: return console.log('ERROR');
        }
    })
}

document.addEventListener('DOMContentLoaded', init);