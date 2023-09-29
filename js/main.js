const  navbar = document.querySelector('.navbar');
const toggleButton = document.querySelector('.toggle-menu');

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle("active")
})

// sunnyside-agency-landing-page-main