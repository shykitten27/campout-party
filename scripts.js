// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    const takeoffbutton = document.getElementById("takeoff");
    takeoffbutton.addEventListener("click", confirmTakeoff);

    const landbutton = document.getElementById("landing");
    landbutton.addEventListener("click", alertLanding);

    const abortbutton = document.getElementById("missionAbort");
    abortbutton.addEventListener("click", confirmAbort);  
           
    const rightbutton = document.getElementById("moveRight");
    rightbutton.addEventListener("click", moveRt); 
    
    const leftbutton = document.getElementById("moveLeft");
    leftbutton.addEventListener("click", moveLf);  

    const upbutton = document.getElementById("moveUp");
    upbutton.addEventListener("click", moveU); 
    
    const downbutton = document.getElementById("moveDown");
    downbutton.addEventListener("click", moveD);
}

function confirmTakeoff() {
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
    
    if (response) {
        document.getElementById("flightStatus").innerHTML ="Shuttle in flight.";
        const shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "blue";
        const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) + 10000).toString();
    }	
}

function alertLanding() {
    window.alert("The shuttle has landed.");
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
}

function confirmAbort() {
    let response = window.confirm("Confirm that you want to abort the mission.");
    
    if (response) {
        document.getElementById("flightStatus").innerHTML ="Mission aborted.";
        const shuttleBackground = document.getElementById("shuttleBackground");
        shuttleBackground.style.backgroundColor = "green";
        const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
        spaceShuttleHeight.innerHTML = 0;
    }	
}

function moveRt() {
    const rocketimage = document.getElementById("rocket");
    rocketimage.style.position = "relative";
    rocketimage.style.left = "0px";  
    rocketimage.style.left = parseInt(rocketimage.style.left) + 10 + "px";
}

function moveLf() {
    const rocketimage = document.getElementById("rocket");
    // rocketimage.style.position = "relative";
    // rocketimage.style.left = "0px";  
    rocketimage.style.left = parseInt(rocketimage.style.left) - 10 + "px";
}

function moveU() {
    const rocketimage = document.getElementById("rocket");
    rocketimage.style.position = "relative";
    rocketimage.style.top = "0px";  
    rocketimage.style.top = parseInt(rocketimage.style.top) - 10 + "px";
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) + 10000).toString();    
}

function moveD() {
    const rocketimage = document.getElementById("rocket");
    // rocketimage.style.position = "relative";
    // rocketimage.style.top = "0px";  
    rocketimage.style.top = parseInt(rocketimage.style.top) + 10 + "px";
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    spaceShuttleHeight.innerHTML = (Number(spaceShuttleHeight.innerHTML) - 10000).toString();    
}

window.addEventListener("load", init);