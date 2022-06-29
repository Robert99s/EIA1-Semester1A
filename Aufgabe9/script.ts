window.addEventListener("load", function(): void {

// Array: Audiodateien
var sounds: HTMLAudioElement[] =
    [
        new Audio("assets/hihat.mp3"),
        new Audio("assets/kick.mp3"),
        new Audio("assets/snare.mp3"),
        new Audio("assets/A.mp3"),
        new Audio("assets/C.mp3"),
        new Audio("assets/F.mp3"),
        new Audio("assets/G.mp3"),
        new Audio("assets/laugh-1.mp3"),
        new Audio("assets/laugh-2.mp3")
    ];

// zusätzliche Variablen
var myInterval: number;
var index: number = 0;
var playback: boolean;

// function play sounds 
function playSample(sound: HTMLAudioElement): void {
    sound.play();
}

// Playbutton-Event & switch Play/Pause Button
function playBeat (): void {
    if (document.querySelector("#play").getAttribute("class") == "fas fa-play") {
    document.querySelector("#play").setAttribute("class", "fas fa-pause");
    myInterval = setInterval(tone, 500);   
    }
    else {document.querySelector("#play").setAttribute("class", "fas fa-play");
    // tslint:disable-next-line: align
    clearInterval(myInterval); }
    // function play beat
    function tone(): void {
        playSample(sounds[index]);
        index++;
        if (index == 3) {index = 0; }
    }
}

    // function delete remix
    // tslint:disable-next-line: align
    function deleteRemix(): void {
            clearInterval(myInterval);
        // tslint:disable-next-line: align
        if (document.querySelector("#play").getAttribute("class") == "fas fa-pause") {
        document.querySelector("#play").setAttribute("class", "fas fa-play"); }
    }

    // function play remix
    function playRemix(): void {
            myInterval = setInterval(mix, 250);
            function mix(): void {
                index = Math.floor(Math.random() * 5);
                playSample(sounds[index]);       
            }

            playback = true;
        if (playback == true) {document.querySelector("#play").setAttribute("class", "fas fa-pause"); }
        else {document.querySelector("#play").setAttribute("class", "fas fa-play");
        // tslint:disable-next-line: align
        clearInterval(myInterval); } }
        

// Klick-Event Pads
document.querySelector("#hihat").addEventListener("click", function (): void { playSample(sounds[0]); });
document.querySelector("#kick").addEventListener("click", function (): void { playSample(sounds[1]); });
document.querySelector("#snare").addEventListener("click", function (): void { playSample(sounds[2]); });
document.querySelector("#noteA").addEventListener("click", function (): void { playSample(sounds[3]); });
document.querySelector("#noteB").addEventListener("click", function (): void { playSample(sounds[4]); });
document.querySelector("#noteC").addEventListener("click", function (): void { playSample(sounds[5]); });
document.querySelector("#noteD").addEventListener("click", function (): void { playSample(sounds[6]); });
document.querySelector("#laughter1").addEventListener("click", function (): void { playSample(sounds[7]); });
document.querySelector("#laughter2").addEventListener("click", function (): void { playSample(sounds[8]); });

// Klick-Event Buttons
document.querySelector("#play").addEventListener("click", function(): void {playBeat(); });
document.querySelector("#remix").addEventListener("click", function(): void {playRemix(); });
document.querySelector("#delete").addEventListener("click", function(): void {deleteRemix(); });
});