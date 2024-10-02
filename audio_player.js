 // Get the audio element
        const audio = document.getElementById('background-audio');

        // Attempt to play the audio on page load
        window.onload = function() {
            audio.play().catch(function(error) {
                console.log('Autoplay was prevented:', error);
            });
        };


