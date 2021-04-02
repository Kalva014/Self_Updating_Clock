function getTime() {
    var clock = document.getElementById("digitalClock")
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian;
    clock.innerText = clockTime;
    clock.textContent = clockTime;
}

// Continue to call getTime every second
setInterval(getTime, 1000);
getTime();