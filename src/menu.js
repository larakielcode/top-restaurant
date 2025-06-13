import logo from "./assets/larakielresto.png"

export default function showMenuPanel(content) {

    const menuContainer = document.createElement('div');
    const mainCourseDiv = document.createElement('div');
    const logoContainer = document.createElement('div');

    menuContainer.appendChild(logoContainer);
    logoContainer.classList.add('menu-logo-container');
    const logoImg = document.createElement('img');
    logoContainer.appendChild(logoImg);
    logoImg.src = logo;

    menuContainer.setAttribute('class', 'menu-container');
    content.appendChild(menuContainer);

    /* Main Course code goes here */
    mainCourseDiv.classList.add('main-course');
    menuContainer.appendChild(mainCourseDiv);

    const mainCourseTitleDiv = document.createElement('div');
    const mainCourseMenuChoices = document.createElement('div');
    const mainCourseMenuPrices = document.createElement('div');
    const mainCourseMenuTitle = document.createElement('p');
    const mainCoursePictureDiv = document.createElement('div');

    mainCourseDiv.appendChild(mainCoursePictureDiv);
    mainCoursePictureDiv.classList.add('main-course-picture');

    mainCourseDiv.appendChild(mainCourseTitleDiv);
    mainCourseDiv.appendChild(mainCourseMenuChoices);
    mainCourseDiv.appendChild(mainCourseMenuPrices);
    mainCourseMenuChoices.classList.add('main-course-menu');
    mainCourseMenuPrices.classList.add('main-course-prices');

    mainCourseMenuChoices.innerHTML = `
        <ul>
            <li>Crispy Pata</li>
            <li>Beef Pochero</li>
            <li>Lechon Baboy</li>
            <li>Kaldereta</li>
        </ul>
        `;

    mainCourseMenuPrices.innerHTML = `
        <ul>
            <li>PHP 750.00</li>
            <li>PHP 1200.00 (5-6 pax)</li>
            <li>PHP 900 / KL</li>
            <li>PHP 400</li>
        </ul>
        `;

    mainCourseTitleDiv.appendChild(mainCourseMenuTitle);
    mainCourseTitleDiv.classList.add('main-course-title');
    mainCourseMenuTitle.textContent = 'Main Course';
    /* Main Course code ends here */

    /* Start Appetizer code */
    const appetizersDiv = document.createElement('div');
    const appetizersDivTitle = document.createElement('div');
    const appetizersTitle = document.createElement('p');
    const appetizersMenu = document.createElement('div');
    const appetizersPrice = document.createElement('div');
    const appetizersPictureDiv = document.createElement('div');

    appetizersDiv.classList.add('appetizers');
    menuContainer.appendChild(appetizersDiv);

    appetizersDiv.appendChild(appetizersPictureDiv);
    appetizersPictureDiv.classList.add('appetizers-course-picture');

    appetizersDivTitle.classList.add('appetizers-title-container');
    appetizersDiv.appendChild(appetizersDivTitle);
    appetizersDivTitle.appendChild(appetizersTitle);
    appetizersTitle.textContent = 'Appetizers'

    appetizersMenu.classList.add('appetizers-menu');
    appetizersDiv.appendChild(appetizersMenu);
    appetizersPrice.classList.add('appetizers-price');
    appetizersDiv.appendChild(appetizersPrice);

    appetizersMenu.innerHTML = `
        <ul>
            <li>French Fries</li>
            <li>Fruit Salad</li>
            <li>Mango Tapioca</li>
            <li>Sandwich</li>
        </ul>
    `;

    appetizersPrice.innerHTML = `
        <ul>
            <li>PHP 300</li>
            <li>PHP 250</li>
            <li>PHP 250</li>
            <li>PHP 175</li>
        </ul>
    `;

    /* End Appetizer code */

    /* Start Beverage code */
    const beverageDiv = document.createElement('div');
    const beverTitleContainer = document.createElement('div');
    const beverTitle = document.createElement('p');
    const beverMenu = document.createElement('div');
    const beverPrice = document.createElement('div');
    const beverPictureDiv = document.createElement('div');

    beverageDiv.classList.add('beverages');
    menuContainer.appendChild(beverageDiv);

    beverageDiv.appendChild(beverPictureDiv);
    beverPictureDiv.classList.add('bever-course-picture');

    beverageDiv.appendChild(beverTitleContainer);
    beverTitleContainer.classList.add('bever-title-container');
    beverTitleContainer.appendChild(beverTitle);
    beverTitle.textContent = 'Beverages';

    beverMenu.classList.add('bever-menu');
    beverageDiv.appendChild(beverMenu);
    beverPrice.classList.add('bever-price');
    beverageDiv.appendChild(beverPrice);

    beverMenu.innerHTML = `
        <ul>
            <li>Milk Shake</li>
            <li>Iced Tea</li>
            <li>Orange Juice</li>
            <li>Softdrinks</li>
        </ul>
    `;

    beverPrice.innerHTML = `
        <ul>
            <li>PHP 420</li>
            <li>PHP 280</li>
            <li>PHP 300</li>
            <li>PHP 150 / can</li>
        </ul>
    `;

    /* End Beverage code */
}