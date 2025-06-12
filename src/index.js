import "./styles/main.css";
import { test } from "./mainscript.js";
import { home } from "./home.js";
import logo from "./assets/larakielresto.png";

console.log(home);
console.log(test);

const logoImg = document.querySelector('#company-logo');
logoImg.src = logo;