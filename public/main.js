/*const dropdownButton = document.querySelector('[data-dropdown-toggle="dropdownMenu"]');
const dropdownMenu = document.getElementById('dropdownMenu');
dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('hidden');
}); 

document.addEventListener('DOMContentLoaded', function() {

    console.log('Dropdown toggle clicked');

    var dropdownToggle = document.querySelector('[data-dropdown-toggle="dropdownMenu"]');
    var dropdownMenu = document.getElementById('dropdownMenu');

    dropdownToggle.addEventListener('click', function() {
       dropdownMenu.classList.toggle('hidden');
    });
}); */
// dropdown.js
document.getElementById('dropdownToggle').addEventListener('click', function() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('hidden');
  });


  