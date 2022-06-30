document.getElementById('modal_adults').onkeydown = function (e) {
    return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));  // IE > 9
}

document.getElementById('modal_childrens').onkeydown = function (e) {
    return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));  // IE > 9
}

let modalForm = document.querySelector(".modal_form");
let btnModal = document.querySelector(".btn_search_hotels");

let varHeader = document.querySelector("header");
let varMain = document.querySelector("main");
let varFooter = document.querySelector("footer");

btnModal.onclick = function() {	
modalForm.style.display = "block";

varHeader.style.opacity = "0.2";
varMain.style.opacity = "0.2";
varFooter.style.opacity = "0.2";
}

let modalClose = document.querySelector(".btn_close_modal");

modalClose.onclick = function() {
modalForm.style.display = "none";

varHeader.style.opacity = "1";
varMain.style.opacity = "1";
varFooter.style.opacity = "1";
}