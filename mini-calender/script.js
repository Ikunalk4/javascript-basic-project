const month = document.querySelector('.month');
const weekday = document.querySelector('.weekday');
const currDate = document.querySelector(".date");
const year = document.querySelector(".year");

window.addEventListener("DOMContentLoaded", () => {
    const date = new Date();
    month.textContent = date.toLocaleDateString('en-US', { month: 'long' });
    weekday.textContent = date.toLocaleDateString('en-US', { weekday: 'long'});
    currDate.textContent = date.getDate();
    year.textContent = date.getFullYear();
});
