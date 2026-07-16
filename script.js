function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#time-element");
    timeText.innerHTML = currentTime;
}

setInterval(updateTime, 1000);