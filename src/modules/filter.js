export default function filter() { //Функия фультра по акции и цене
    const cards = document.querySelectorAll('.goods .card'), //Сортировка по акциям
        diskountCheckbox = document.getElementById('discount-checkbox'),
        min = document.getElementById('min'),
        max = document.getElementById('max');
    cards.forEach((card) => {
        const cardPrice = card.querySelector('.card-price'),
            price = parseFloat(cardPrice.textContent),
            diskount = card.querySelector('.card-sale');

        if ((min.value && price < min.value) || (max.value && price > max.value)) {
            card.parentNode.style.display = 'none';
        } else if (diskountCheckbox.checked && !diskount) {
            card.parentNode.style.display = 'none';
        } else {
            card.parentNode.style.display = '';
        };
    });
};