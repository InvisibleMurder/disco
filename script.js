// Get the audio element and the button element from the HTML
const siren = document.getElementById('sirenSound');
const startButton = document.getElementById('startButton');

// Add an event listener to the button
startButton.addEventListener('click', function() {
    // Play the sound when the button is clicked
    siren.play();
    
    // Hide the button after it's been clicked
    startButton.style.display = 'none';
});