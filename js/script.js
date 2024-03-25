"use strict";


// Light and Dark mode
const $themeBtn = document.querySelector("[data-theme-btn]");
const $HTML = document.documentElement;
let isDark = window.matchMedia("(prefers-color-scheme)").matches;

if (sessionStorage.getItem("theme")){
    $HTML.dataset.theme = sessionStorage.getItem("theme");
}
else{
    $HTML.dataset.theme = isDark? "dark" : "light";
    
}

const changeTheme = () => {
    $HTML.dataset.theme = sessionStorage.getItem("theme") == "light" ? "dark" :
    "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

$themeBtn.addEventListener("click", changeTheme);


/* TAB  */

const /*{NodeList}*/ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /*{Element}*/ [lastActiveTab] = document.querySelectorAll("[data-tab-content]");
let /*{Element}*/ [lastActiveTabBtn] = Array.from($tabBtn);

$tabBtn.forEach(item => {
    item.addEventListener("click", function() {
    
        lastActiveTab.classList.remove("active");
        lastActiveTabBtn.classList.remove("active");

        const /*{Element}*/ $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        $tabContent.classList.add("active");
        this.classList.add("active");

        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});

/* Email Handling From Form*/

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.input-wrapper');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        fetch('https://script.google.com/macros/s/AKfycbw37FpLpthjBrVWs52W_RljDUxtctkz0WRwPYOuZWpY4o6A9GOUzZ6bX6uAvJnAdvgG/exec', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                console.log('Form data submitted successfully.');
                // Clear form fields or show a success message
                form.reset();
            } else {
                console.error('Failed to submit form data.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});