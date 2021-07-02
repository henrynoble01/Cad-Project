"use strict"

let sidebar = document.querySelectorAll('.side-list')
let showGrid = document.querySelectorAll('.side-list-item')
// ************************************//
let angleIcon = document.querySelector('.angle-left')
let head = document.querySelectorAll('.head')
let sideNav = document.querySelectorAll('.side-nav')
let listText = document.querySelectorAll('.list-text')
let userDevice = document.querySelector('.modal-device-display')



console.log(angleIcon);
showGrid.forEach(element =>  {
    element.addEventListener('click', () => {
        angleIcon.classList.toggle('hidden');
        console.log(element);
        // 
        head.forEach(item => {
            item.classList.toggle('hidden');
        })
        // 
        sideNav.forEach(item => {
            item.classList.toggle('hidden');
        })
        // 
        listText.forEach(item => {
            item.classList.toggle('hidden');
        })

        userDevice.classList.toggle('show-modal');
    })
} )