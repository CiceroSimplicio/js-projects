const value = document.getElementById('value');
const buttons = document.querySelectorAll('.buttons button');
let count = 0;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        const classes = btn.classList;
        if (classes.contains('decrease')) {
            count--;
        } else if (classes.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        if (count < 0) {
            value.style.color = 'red';
        } else if (count > 0) {
            value.style.color = 'green';
        } else {
            value.style.color = 'initial';
        }
        value.textContent = count;
    });
});