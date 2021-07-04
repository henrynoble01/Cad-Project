"use strict"
let response
let sidebar = document.querySelectorAll('.side-list')
let showGrid = document.querySelectorAll('.side-list-item')
// ************************************//
let angleIcon = document.querySelector('.angle-left')
let head = document.querySelectorAll('.head')
let headContainer = document.querySelectorAll('.head-container')
let sideNav = document.querySelectorAll('.side-nav')
let listText = document.querySelectorAll('.list-text')
let userDevice = document.querySelector('.modal-device-display')
let deviceList = document.querySelector('.device-list')
let deviceData = document.querySelector('.device-data')
console.log(deviceData  );


deviceData.addEventListener('click', ()=> {
  userDevice.classList.toggle('show-modal');
})

showGrid.forEach(element =>  {
    element.addEventListener('click', () => {
        angleIcon.classList.toggle('hidden');
        // console.log(element);
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
        headContainer.forEach(item => {
            // console.log(item);
            item.classList.toggle('hidden');
        })
      
    })
} )

// var myInit

let myInit = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    mode:'cors',
    cache: 'default',
};
let myRequest = new Request('./data.json', myInit);

fetch(myRequest)
.then(resp => resp.json())
.then(res => {
    setTimeout(createDeviceProfile(res) , 50000)
    // showlist()
    console.log(res)
})
.catch(err => {console.log(err)})


function createDeviceProfile(param){
    let singleItem = param.map( item => {
        return ` <li class="list-item ${item.status.toLowerCase()} ">
                <div class="img-control">
                  <img src="${item.url}" alt="" />
                </div>
                <div class="device-details">
                  <span class="name"> ${item.deviceName} </span>
                  <span class="status"> ${item.status} </span>
                </div>
                <div class="icons">
                  <img src="./img/close_icon.svg" alt="" />
                  <img src="./img/Info.svg" alt="" />
                </div>
              </li>`
    }).join('')
    deviceList.innerHTML += singleItem
}