const button = document.getElementById('myButton');
const popupContainer = document.querySelector('.popup-container');

let isPopupVisible = false;

button.addEventListener('click', () => {
    if (!isPopupVisible) {
        popupContainer.style.display = 'block';
    } else {
        popupContainer.style.display = 'none';
    }
    // Toggle the visibility flag
    isPopupVisible = !isPopupVisible;
});