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
var closeBtn = document.getElementById("closeBtn");
var toggleClose = document.getElementById("toggleClose");


const popupClose = document.querySelector("#popup h1");

removePopup = () => {popupClose.parentElement.classList.add("dispNone");}

popupClose.addEventListener("click", removePopup, false);

function displayNthDevice(index) {
    if (devices[index].classList.contains('deviceListClosed')) {
        devices[index].classList.replace('deviceListClosed', 'deviceListOpened');
    } else {
        devices[index].classList.replace('deviceListOpened', 'deviceListClosed');
    }
}
/*
function btnAppear(){
    closeBtn.style.display = "block";
}

toggleClose.addEventListener("click", btnAppear, false);


*/

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




/*displayNthElement ti e za da gi handlnish nav elementite. Preku HTML gi naprajv onclick za da nemora da odish vo JS sekoj pat. Samo koke dodavash devices napraj var type so ime deviceList4 i document.getElementById('id na device sho go dodavash') ; posle dodaj go vo array i tolku

<li id='navEle2' class="navEle">                                  navEle2 i navEle ne ti trebat
    <div class='wrap'>                                            wrap ne ti treba
        <img src="../images/phone.png" />                         ovde ne menvaj
        <h2>Asus</h2>                                             ovde device name pr lg, asus, xiaomi etc
        <h3 id='arr1' onclick="displayNthDevice(0)">⇩</h3> ovde samo menvaj gi paramaters. sega e 0 ama na slednite sho ke gi klavash klaj od prethodniot + 1
    </div>
    <ul id='deviceList1' class="deviceList deviceListClosed">     ovde nisto ne se menva
        <li class="device">
            <a href=''><h4>Zenfone 2 Laser (Z00L)</h4></a>        ovde nekoe ime ako treba da smenish vo H4 tag i vo href tag na <a /> se menva linkot
        </li>
        <li class="device">
            <a href=''><h4>Zenfone 2 Laser/Selfie (Z00T)</h4></a> isto
        </li>
        <li class="device">
            <a href=''><h4>Zenfone Max Pro M1 (X00TD)</h4></a>    isto
        </li>
    </ul>
</li>
*/
