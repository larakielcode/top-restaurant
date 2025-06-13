import logo from "./assets/larakielresto.png"

function showMenuPanel(content) {

    const menuContainer = document.createElement('div');
    const mainCourseDiv = document.createElement('div');
    const logoContainer = document.createElement('div');
    const appetizersDiv = document.createElement('div');
    const beverageDiv = document.createElement('div');

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
        </ul>
        `;

    mainCourseMenuPrices.innerHTML = `
        <ul>
            <li>PHP 750.00</li>
            <li>PHP 1200.00 (good for 5-6 persons)</li>
            <li>PHP 900 / KL</li>
        </ul>
        `;

    mainCourseTitleDiv.appendChild(mainCourseMenuTitle);
    mainCourseTitleDiv.classList.add('main-course-title');
    mainCourseMenuTitle.textContent = 'Main Course';
    /* Main Course code ends here */

    appetizersDiv.classList.add('appetizers');
    appetizersDiv.textContent = 'appetizers course goes here';
    menuContainer.appendChild(appetizersDiv);

    beverageDiv.classList.add('beverages');
    beverageDiv.textContent = 'beverage course goes here';
    menuContainer.appendChild(beverageDiv);
}

export default showMenuPanel;