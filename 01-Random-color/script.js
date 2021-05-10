const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const hexBtn = document.getElementById('hex-btn');
const value = document.getElementById('value');

// hex color
hexBtn.addEventListener('click', () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomHexNumber()];
    }
    value.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

function randomHexNumber() {
    return Math.floor(Math.random() * hex.length);
}