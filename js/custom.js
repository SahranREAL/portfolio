document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");
    const muteButton = document.getElementById("mute-button");

    let isMuted = false;

    // Définit le volume à 100%
    audio.volume = 1;

    muteButton.addEventListener("click", function (event) {
        event.preventDefault();

        if (isMuted) {
            audio.play();
            muteButton.textContent = "🔊";
        } else {
            audio.pause();
            muteButton.textContent = "🔇";
        }
        isMuted = !isMuted;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");
    const startButton = document.getElementById("start-music");

    audio.volume = 1;

    startButton.addEventListener("click", function () {
        audio.play();

    });
});

