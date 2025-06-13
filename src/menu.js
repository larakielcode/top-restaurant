function showMenuPanel(content) {

    const menuContainer = document.createElement('div');
    const mainCourseDiv = document.createElement('div');
    const appetizersDiv = document.createElement('div');
    const beverageDiv = document.createElement('div');

    menuContainer.setAttribute('class', 'menu-container');
    content.appendChild(menuContainer);
    mainCourseDiv.classList.add('main-course');
    menuContainer.appendChild(mainCourseDiv);
    appetizersDiv.classList.add('appetizers');
    menuContainer.appendChild(appetizersDiv);
    beverageDiv.classList.add('beverages');
    menuContainer.appendChild(beverageDiv);
}

export default showMenuPanel;