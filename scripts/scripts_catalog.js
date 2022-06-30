document.getElementById('min_price').onkeydown = function (e) {
    return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));  // IE > 9
}

document.getElementById('max_price').onkeydown = function (e) {
    return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));  // IE > 9
}

let btnFav = document.querySelectorAll('.btn_favorites, .btn_favorites_active');

for (let elem2 of btnFav){

elem2.onclick = function() {

    elem2.classList.toggle('btn_favorites_active');
    elem2.classList.toggle('btn_favorites');

    if (elem2.textContent=='В избранное') {
    elem2.textContent='В избранном';
    }

    else if (elem2.textContent=='В избранном') {
        elem2.textContent='В избранное';
    }
}
}