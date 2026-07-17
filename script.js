function updateTime() {
    var currentTime = new Date().toLocaleString();
    var timeText = document.querySelector("#time-element");
    timeText.innerHTML = currentTime;
}

setInterval(updateTime, 1000);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var topBar = document.querySelector("#top")

dragElement(document.getElementById("welcome-message"));
dragElement(document.getElementById("notes"));

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block";
  biggestIndex++;
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
}

var welcomeMessage = document.querySelector("#welcome-message");

var welcomeMessageClose = document.querySelector("#welcome-messageclose")
// var welcomeMessageOpen = document.querySelector("#welcome-messageopen")

welcomeMessageClose.addEventListener("click", function() {
  closeWindow(welcomeMessage);
});

// welcomeMessageOpen.addEventListener("click", function() {
//   openWindow(welcomeMessage);
// });

var notes = document.querySelector("#notes");

var notesClose = document.querySelector("#notesclose")
var notesOpen = document.querySelector("#notesopen")

notesClose.addEventListener("click", function() {
    closeWindow(notes);
})

notesOpen.addEventListener("click", function() {
    openWindow(notes);
})

var biggestIndex = 1;

function handleWindowTap(element) {
  biggestIndex++;  // Increment biggestIndex by 1
  element.style.zIndex = biggestIndex;
  topBar.style.zIndex = biggestIndex + 1;
  deselectIcon(selectedIcon)
}

function addWindowTapHandling(element) {
  element.addEventListener("mousedown", () =>
    handleWindowTap(element)
  )
}

addWindowTapHandling(welcomeMessage);
addWindowTapHandling(notes);
