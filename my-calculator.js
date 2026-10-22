let calculation = localStorage.getItem('calculation') || ''

function updateCalculation(value) {
    calculation += value;
    document.querySelector('.js-numbers').innerHTML = calculation
}