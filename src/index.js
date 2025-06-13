import "./styles/main.css";
import { content, menuBtn } from "./header.js";
import displayHome from "./home.js";

window.onload = () => {
    displayHome(content);
}

menuBtn.forEach(cell => cell.addEventListener('click', (event) => {

    switch (event.target.id) {
        case 'homebtn':
        case 'menubtn':
        case 'contactbtn':
        default:
            break;
    }

}));