import "./styles/main.css";
import { content, menuBtn, clearClass } from "./header.js";
import displayHome from "./home.js";
import showMenuPanel from "./menu.js";

window.onload = () => {
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
            console.log('contact');
            break;
        default:
            break;
    }

}));
