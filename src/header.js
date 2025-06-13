// export the content div area 
export const content = document.querySelector('#content');

// grab all the buttons
export const menuBtn = document.querySelectorAll('.menu');

export function clearClass() {

    for (const element of menuBtn) {
        element.classList.remove('active');
    }
}