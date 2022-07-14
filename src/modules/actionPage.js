import filter from './filter';

// фтльтры и поиск
export default function actionPage() {
    const cards = document.querySelectorAll('.goods .card'), //Сортировка по акциям
        diskountCheckbox = document.getElementById('discount-checkbox'),
        playstationCheckbox = document.getElementById('playstation-checkbox'),
        xboxCheckbox = document.getElementById('xbox-checkbox'),
        nintendoCheckbox = document.getElementById('nintendo-checkbox'),
        min = document.getElementById('min'),
        max = document.getElementById('max'),
        goods = document.querySelector('.goods'),
        search = document.querySelector('.search-wrapper_input'),
        searchBtn = document.querySelector('.search-btn');

    //Фильтр по акции
    diskountCheckbox.addEventListener('click', filter);


    min.addEventListener('change', filter);
    max.addEventListener('change', filter);

    searchBtn.addEventListener('click', () => { //Функция поиска по названию
        const searchText = new RegExp(search.value.trim(), 'i');
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if (!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
    });
};

//end фильтры