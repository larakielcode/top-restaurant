// export the content div area 
export const content = document.querySelector('#content');

// grab all the buttons
export const menuBtn = document.querySelectorAll('.menu');

export function clearClass() {
    let counter = 0;

    for (const element of menuBtn) {
        if (counter == 0) {
            if (element.id == 'homebtn') {
                element.classList.add('active');
            }
            element.classList.remove('active');
        }
        element.classList.remove('active');
    }
}