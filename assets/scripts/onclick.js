const outputs = document.getElementsByClassName('output');

function calculateTotalPrice(quantity = 2, price = 15000000) {
    const result = (quantity * price).toLocaleString('ru-RU');

    alert(`Стоимость покупки ${result} рублей`);
    for (let i = 0; i < outputs.length; i++) {
        outputs[i].innerText = `Стоимость покупки ${result} рублей`;
        outputs[i].style.display = 'block';
    }
}
