function calculateTotalPrice(quantity = 2, price = 15000000) {
    result = (quantity * price).toLocaleString('ru-RU');

    alert(`Стоимость покупки ${result} рублей`);
    const outputs = document.getElementsByClassName('output');
    for (let i = 0; i < outputs.length; i++) {
        outputs[i].innerText = `Стоимость покупки ${result} рублей`;
        outputs[i].style.display = 'block';
    }
}
