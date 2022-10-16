const timerText = document.getElementById('timerText');
const buttonPlayPause = document.getElementById('buttonPlayPause');
var hr = '0';
var min = '00';
var sec = '00';
var playing = false;
function playPauseTimer() {
    if (playing == false) {
        playing = true;
        buttonPlayPause.innerHTML = '❚❚';
        timerCycle();
    }
    else {
        playing = false;
        buttonPlayPause.innerHTML = '▶';
    }
}
function addAmountTimer(s) {
    sec = String(parseInt(sec) + s);
    if (parseInt(hr) < 9) {
        if (parseInt(sec) >= 60) {
            min = String(parseInt(min) + Math.floor(parseInt(sec) / 60));
            sec = String(parseInt(sec) % 60);
        }
        if (parseInt(min) >= 60) {
            hr = String(parseInt(hr) + Math.floor(parseInt(min) / 60));
            min = String(parseInt(min) % 60);
        }
    }
    else if (parseInt(min) < 59) {
        hr = '9';
        if (parseInt(sec) >= 60) {
            min = String(parseInt(min) + Math.floor(parseInt(sec) / 60));
            sec = String(parseInt(sec) % 60);
        }
        if (parseInt(min) >= 60) {
            min = '59';
            sec = '59';
        }
    }
    else if (parseInt(sec) >= 60) {
        sec = '59';
        playing = false;
        buttonPlayPause.innerHTML = '▶';
    }
    if (sec.length < 2) {
        sec = '0' + sec;
    }
    if (min.length < 2) {
        min = '0' + min;
    }
    timerText.innerHTML = hr + ':' + min + ':' + sec;
}
function timerCycle() {
    if (playing == true) {
        sec = String(parseInt(sec) + 1);
        if (parseInt(hr) < 9) {
            if (parseInt(sec) >= 60) {
                min = String(parseInt(min) + Math.floor(parseInt(sec) / 60));
                sec = String(parseInt(sec) % 60);
            }
            if (parseInt(min) >= 60) {
                hr = String(parseInt(hr) + Math.floor(parseInt(min) / 60));
                min = String(parseInt(min) % 60);
            }
        }
        else if (parseInt(min) < 59) {
            hr = '9';
            if (parseInt(sec) >= 60) {
                min = String(parseInt(min) + Math.floor(parseInt(sec) / 60));
                sec = String(parseInt(sec) % 60);
            }
            if (parseInt(min) >= 60) {
                min = '59';
            }
        }
        else if (parseInt(sec) >= 60) {
            sec = '59';
            playing = false;
            buttonPlayPause.innerHTML = '▶';
        }
        if (sec.length < 2) {
            sec = '0' + sec;
        }
        if (min.length < 2) {
            min = '0' + min;
        }
        timerText.innerHTML = hr + ':' + min + ':' + sec;
        setTimeout("timerCycle()", 1000);
    }
}
