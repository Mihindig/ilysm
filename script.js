function showQuestion() {
    // Hide Click Me Box & Love Image
    document.getElementById("clickMeBox").style.display = "none";
    document.getElementById("loveImage").style.display = "none";

    // Create a new div to display the GIF and question
    let container = document.createElement("div");
    container.id = "questionContainer";
    container.innerHTML = 
        `<img src="https://raw.githubusercontent.com/Mihindig/okay/main/z.gif" id="questionGif"><br>
        <div id="questionBox">Are you ready?</div><br>
        <div class="options">
            <div class="option" onclick="askValentine()">Yes</div>
            <div class="option" onclick="retryReady()">No</div>
        </div>`;
    document.body.appendChild(container);
}

function retryReady() {
    document.getElementById("questionBox").innerHTML = "Nice try diddy. Go click yes<br>";
}

function askValentine() {
    document.getElementById("questionBox").innerHTML = "Do you want to be my Valentine?<br>";
    let options = document.querySelector(".options");
    options.innerHTML = 
        `<div class="option" onclick="finalMessage()">Yes</div>
        <div class="option" onclick="stopPlaying()">No</div>`;
}

function stopPlaying() {
    document.getElementById("questionBox").innerHTML = "Stop playing lol<br>";
}

function finalMessage() {
    document.getElementById("questionBox").innerHTML = "Hahaha thought so pretty lady.<br> Bye, I love you so much <3 <br> You don’t need to be sorry for nothing.<br> You are good enough<br>";
}
