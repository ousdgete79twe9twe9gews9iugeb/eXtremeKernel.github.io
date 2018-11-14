var deviceList1 = document.getElementById('deviceList1');
var deviceList2 = document.getElementById('deviceList2');
var deviceList3 = document.getElementById('deviceList3');
var deviceList4 = document.getElementById('deviceList4');
var devices = [deviceList1, deviceList2, deviceList3, deviceList4];
var i;
var nav = document.getElementById('navContain');
var close = document.getElementById('close');
var developer = document.getElementById('developedBy');
var load = document.getElementById('load');




function displayNthDevice(index) {
    if (devices[index].classList.contains('deviceListClosed')) {
        devices[index].classList.replace('deviceListClosed', 'deviceListOpened');
    } else {
        devices[index].classList.replace('deviceListOpened', 'deviceListClosed');
    }
}





function displayNav() {
    nav.classList.replace('closeNav', 'openNav');
}

function removeNav() {
    nav.classList.replace('openNav', 'closeNav');
}




function disnon() {
    developer.style.display = 'none';
}




function loaded() {
    setTimeout(function () {
        load.style.display = 'none';
    }, 300); //so ova 300 kontrolirash vremeto na loading od koke se loadira window, znaci ako se loadira window za 3000ms celosno ke traj 3300 ms so 300.
}
window.addEventListener('load', loaded());
