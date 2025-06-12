import "./styles/main.css";
import logo from "./assets/larakielresto.png";
import home from "./home.js";

const logoImg = document.querySelector('#company-logo'); // logo image
const content = document.querySelector('#content'); // content area div

home(content);

logoImg.src = logo;