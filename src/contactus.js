export default function showContactUs(content) {

    const contactWrapper = document.createElement('div');
    content.appendChild(contactWrapper);
    contactWrapper.classList.add('contact-wrapper');

    const contactContainer = document.createElement('div');
    contactWrapper.appendChild(contactContainer);
    contactContainer.classList.add('contact-container');

    const contactLeftDiv = document.createElement('div');
    const contactRightDiv = document.createElement('div');

    contactContainer.appendChild(contactLeftDiv);
    contactContainer.appendChild(contactRightDiv);

    contactLeftDiv.classList.add('contact-left');
    contactRightDiv.classList.add('contact-right');

    contactRightDiv.innerHTML = `
        <ul>
            <li>Email Address : deepcut.atm@gmail.com</li>
            <li>Website : https://github.com/larakielcode</li>
        </ul>
    `;

}