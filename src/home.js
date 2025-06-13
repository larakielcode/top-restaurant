import logo from "./assets/larakielresto.png";

function displayHome(content) {
    const firstDiv = document.createElement('div');
    const secondDiv = document.createElement('div');
    const homeTitle = document.createElement('h1');
    const homeDescription = document.createElement('p');
    const thirdDiv = document.createElement('div');
    const thirdDivLeft = document.createElement('div');
    const thirdDivRight = document.createElement('div');
    const logoImg = document.createElement('img');

    content.appendChild(firstDiv);
    firstDiv.setAttribute('class', 'first-div');
    firstDiv.appendChild(logoImg);
    logoImg.setAttribute('id', 'company-logo');
    logoImg.src = logo;
    content.appendChild(secondDiv);
    secondDiv.setAttribute('class', 'second-div');
    secondDiv.appendChild(homeTitle);
    homeTitle.textContent = 'Welcome to Larakiel Resto';
    secondDiv.appendChild(homeDescription);
    homeDescription.textContent =

        "A culinary haven nestled in the heart of Cebu City! Prepare to embark on a gastronomic journey where traditional Filipino flavors meet contemporary culinary artistry. At Larakiel, we believe in creating more than just meals; we craft unforgettable dining experiences. Our commitment to using the freshest local ingredients, combined with our passion for innovative dishes, ensures every bite is a celebration of taste and culture. Whether you're seeking a comforting taste of home or an exciting new culinary adventure, Larakiel Resto invites you to savor the rich heritage and vibrant spirit of Filipino cuisine in a warm and inviting ambiance.";

    content.appendChild(thirdDiv);
    thirdDiv.setAttribute('class', 'third-div');
    thirdDiv.appendChild(thirdDivLeft);
    thirdDivLeft.setAttribute('class', 'third-div-left');
    thirdDivLeft.innerHTML = "<strong><em>Monday to Sunday 04:00 AM to 10:00 PM</em></strong>";
    thirdDiv.appendChild(thirdDivRight);
    thirdDivRight.setAttribute('class', 'third-div-right');
    thirdDivRight.innerHTML = "Address: <strong><em>14th Floor 1Nito Tower, Archbishop Reyes Ave, Cebu City, 6000 Cebu</em></strong>";

}

export default displayHome


/* 

<div class="first-div">
    <img id="company-logo" alt="">
</div>
<div class="second-div">
    <h1>Welcome to Larakiel Resto</h1>
    <p>A culinary haven nestled in the heart of Cebu City! Prepare to embark on a gastronomic journey where traditional Filipino flavors meet contemporary culinary artistry. At Larakiel, we believe in creating more than just meals; we craft unforgettable dining experiences. Our commitment to using the freshest local ingredients, combined with our passion for innovative dishes, ensures every bite is a celebration of taste and culture. Whether you're seeking a comforting taste of home or an exciting new culinary adventure, Larakiel Resto invites you to savor the rich heritage and vibrant spirit of Filipino cuisine in a warm and inviting ambiance.</p>
</div>
<div class="third-div">
    <div class="third-div-left">Store hours : <strong><em>Monday to Sunday 04:00 AM to 10:00 PM</em></strong></div>
    <div class="third-div-right">Address: <strong><em>14th Floor 1Nito Tower, Archbishop Reyes Ave, Cebu City, 6000 Cebu</em></strong></div>
</div>

*/