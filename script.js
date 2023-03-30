const toggleButton = document.getElementById('toggle');
const xButton = document.getElementById('x');
const headerLinks = document.getElementById('header-links');
const dimmer = document.getElementById('dimmer');


toggleButton.addEventListener('click', () => {
    headerLinks.classList.add('active-header');
    xButton.classList.add('active-x');
    toggleButton.classList.add('active-toggle');
    dimmer.classList.add('dimmer');
});

xButton.addEventListener('click', () => {
    xButton.classList.remove('active-x');
    toggleButton.classList.remove('active-toggle');
    headerLinks.classList.remove('active-header');
    dimmer.classList.remove('dimmer');
})

window.addEventListener('resize', () => {
    xButton.classList.remove('active-x');
    toggleButton.classList.remove('active-toggle');
    headerLinks.classList.remove('active-header');
    dimmer.classList.remove('dimmer');
}) // talk about this in learning section