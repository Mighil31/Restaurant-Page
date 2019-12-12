import {home} from './home.js';

const gen = function()
{
    let content = document.querySelector('#content');

    let mainImg = document.createElement('div');
    mainImg.classList.add('img');
    content.appendChild(mainImg);

    let text = document.createElement('div');
    text.classList.add('text-content');
    let ul = document.createElement('li');
    let nav = document.createElement('nav');

    let liHome = document.createElement('li');
    let aHome = document.createElement('a');
    aHome.id = "home"
    aHome.textContent = "Home";
    liHome.appendChild(aHome);
    ul.appendChild(liHome);

    let liMenu = document.createElement('li');
    let aMenu = document.createElement('a');
    aMenu.textContent = "Menu";
    aMenu.id = "menu"
    liMenu.appendChild(aMenu);
    ul.appendChild(liMenu);

    let liContact = document.createElement('li');
    let aContact = document.createElement('a');
    aContact.textContent = "Contact";
    aContact.id = "contact"
    liContact.appendChild(aContact);
    ul.appendChild(liContact);

    nav.appendChild(ul);
    text.appendChild(nav);
    
    let tab = document.createElement('div');
    tab.classList.add("tab-content");
    text.appendChild(tab);

    content.appendChild(text);

    let h1 = document.createElement('h1');
    h1.textContent = "Food so good, you'll never want to stop.";
    h1.classList.add('desc')
    tab.appendChild(h1);

    
    home();

}

export { gen }