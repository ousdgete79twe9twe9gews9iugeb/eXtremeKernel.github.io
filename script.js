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
var cl7 = document.getElementById('changeLog7');
var cl8 = document.getElementById('changeLog8');
var cl9 = document.getElementById('changeLog9');
var cl10 = document.getElementById('changeLog10');
var cl11 = document.getElementById('changeLog11');
var cl12 = document.getElementById('changeLog12');
var cl13 = document.getElementById('changeLog13');
var cl14 = document.getElementById('changeLog14');
var cl15 = document.getElementById('changeLog15');
var cl16 = document.getElementById('changeLog16');
var cl17 = document.getElementById('changeLog17');
var cl18 = document.getElementById('changeLog18');
var cl19 = document.getElementById('changeLog19');
var cl20 = document.getElementById('changeLog20');
var cl21 = document.getElementById('changeLog21');
var cl22 = document.getElementById('changeLog22');
var cl23 = document.getElementById('changeLog23');
var cl24 = document.getElementById('changeLog24');
var cl25 = document.getElementById('changeLog25');
var cl26 = document.getElementById('changeLog26');
var cl27 = document.getElementById('changeLog27');
var cl28 = document.getElementById('changeLog28');
var cl29 = document.getElementById('changeLog29');
var cl30 = document.getElementById('changeLog30');
var cl31 = document.getElementById('changeLog31');
var cl32 = document.getElementById('changeLog32');
var cl33 = document.getElementById('changeLog33');
var cls = [cl1, cl2, cl3, cl4, cl5,cl6,cl7,cl8,cl9,cl10,cl11,cl12,cl13,cl14,cl15,cl16,cl17,cl18,cl19,cl20,cl21,cl22,cl23,cl24,cl25,cl26,cl27,cl28,cl29,cl30,cl31,cl32,cl33];

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
