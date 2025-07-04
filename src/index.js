import "./styles/main.css";
import "./styles/menu.css";
import "./styles/contact.css";

import { content, menuBtn, clearClass } from "./header.js";
import displayHome from "./home.js";
import showMenuPanel from "./menu.js";
import showContactUs from "./contactus.js";

window.onload = () => {
    menuBtn[0].classList.add('active');
    displayHome(content);
}

menuBtn.forEach(cell => cell.addEventListener('click', (event) => {

    clearClass();

    switch (event.target.id) {
        case 'homebtn':
            content.innerHTML = '';
            cell.classList.add('active');
            displayHome(content);
            break;
        case 'menubtn':
            content.innerHTML = '';
            cell.classList.add('active');
            showMenuPanel(content);
            break;
        case 'contactbtn':
            content.innerHTML = '';
            cell.classList.add('active');
            showContactUs(content);
            break;
        default:
            break;
    }

}));
