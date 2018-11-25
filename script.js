var deviceList1 = document.getElementById('deviceList1');
var deviceList2 = document.getElementById('deviceList2');
var deviceList3 = document.getElementById('deviceList3');
var deviceList4 = document.getElementById('deviceList4');
var devices = [deviceList1, deviceList2, deviceList3, deviceList4];
var i;
var nav = document.getElementById('navContain');
var innerDiv1 = document.getElementById('innerDiv1');
var innerDiv2 = document.getElementById('innerDiv2');
var rom1 = document.getElementById('rom1');
var rom2 = document.getElementById('rom2');
var roms = [rom1, rom2];
var cl1 = document.getElementById('changeLog1');
var cl2 = document.getElementById('changeLog2');
var cl3 = document.getElementById('changeLog3');
var cl4 = document.getElementById('changeLog4');
var cl5 = document.getElementById('changeLog5');
var cl6 = document.getElementById('changeLog6');
var cls = [cl1, cl2, cl3, cl4, cl5,cl6];

function openCL(index) {
    cls[index].style.display = 'block';
}

function closeCL(index) {
    cls[index].style.display = 'none';
}




function displayRom(index) {
    if (roms[index].classList.contains('reduce')) {
        roms[index].classList.replace('reduce', 'expand');
    } else {
        roms[index].classList.replace('expand', 'reduce');
    }
}



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




function loaded() {
    setTimeout(function () {
        load.style.display = 'none';
    }, 300); //so ova 300 kontrolirash vremeto na loading od koke se loadira window, znaci ako se loadira window za 3000ms celosno ke traj 3300 ms so 300.
}





window.addEventListener('load', loaded());
