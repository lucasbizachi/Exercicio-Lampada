const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

turnOn.addEventListener('click', lampOn);


function lampOn () {
    if(!isLampBroken()) {
        lamp.src = './img/ligada.jpg';
    }
}

turnOff.addEventListener('click', lampOff);

function lampOff() {
    if(!isLampBroken()) {
        lamp.src = './img/desligada.jpg';
    }
}

lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}

function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
}