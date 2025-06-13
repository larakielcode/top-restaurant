import "./styles/main.css";
import { content, menuBtn } from "./header.js";
import displayHome from "./home.js";

window.onload = () => {
    displayHome(content);
}

menuBtn.forEach(cell => cell.addEventListener('click', (event) => {
    //console.log(event.target.id);
    console.log(event.target);
    let classCounter = event.target.id;

    if (event.target.id == 'homebtn' && classCounter == 'homebtn') {
        event.target.className = 'active';
    }

    switch (event.target.id) {
        case 'homebtn':
            displayHome(content);
            break;
        case 'menubtn':
            alert('menu button');
            break;
        case 'contactbtn':
            alert('contact button');
        default:
            break;
    }
}));