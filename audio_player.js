
    // Path to the single audio file
    const audioFile = "https://github.com/AR-DEV-1/Eaglercraft-1.21.1/blob/main/assets/minecraft/sounds/title_screen/Minecraft.mp3";  // minecraft.mp3

    // Create an audio element and set its attributes
    const audio = new Audio(audioFile);
    audio.loop = true;   // Lol
    audio.autoplay = true; // Stuff

    // Play the audio when the page loads
    window.onload = function() {
        audio.play();
    };
// ;) Copyright no one. Not even you MOJANG!
