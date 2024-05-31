let menus = [];
function updateMenu() {
    const menuList = document.getElementById('menu-list');
    menuList.innerHTML = '';
    menus.forEach((menu, index) => {
        const li = document.createElement('li');
        li.classList.add('menu-item');
        li.textContent = menu.displayInfo();

        const editButton = document.createElement('button');
        editButton.textContent = 'Изменить блюдо';
        editButton.onclick = function() {
            editMenu(index);
        };
        li.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить блюдо';
        deleteButton.onclick = function() {
            deleteMenu(index);
        };
        li.appendChild(deleteButton);

        menuList.appendChild(li);
    });
}
function addmenu() {
    const restoranInput = document.getElementById('restoran');
    const nazvanieInput = document.getElementById('nazvanie');
    const cenaInput = document.getElementById('cena');
    const SostavInput = document.getElementById('Sostav');
    const kolvoInput = document.getElementById('kolvo');


    const restoran = restoranInput.value.trim();
    const nazvanie = nazvanieInput.value.trim();
    const cena = parseInt(cenaInput.value);
    const Sostav = SostavInput.value.trim();
    const kolvo = parseInt(kolvoInput.value);


    if (restoran==="" || nazvanie==="" || cena<=0 || Sostav==="" || kolvo<=0) {
      alert('Есть ошибки. Возможные варианты: \n1. Необходимо заполнить всё\n2. Цена и кол-во на складе не могут быть отрицательными');
    }
    else {
        const menu = {
        restoran: restoran,
        nazvanie: nazvanie,
        cena: cena,
        Sostav: Sostav,
        kolvo: kolvo,
        displayInfo: function () {
              return `В ресторане <${this.restoran}> есть блюдо, название которого: ${this.nazvanie}. Цена этого блюда: ${this.cena} руб. Состав данного блюда: ${this.Sostav}. Количество продукции на складе: ${this.kolvo}`;
        }
    };
        menus.push(menu);
        updateMenu();
        restoranInput.value = '';
        nazvanieInput.value = '';
        cenaInput.value = '';
        SostavInput.value = '';
        kolvoInput.value = '';
    }
}
function deleteMenu(index) {
    menus.splice(index, 1);
    updateMenu();
}

function editMenu(index) {
    const menu = menus[index];
    const newre = prompt('Укажите новое блюдо:', menu.restoran);
    const newnaz = prompt('Введите новое название:', menu.nazvanie);
    const newcena = parseInt(prompt('Введите новую цену:', menu.cena));
    const newSostav = prompt('Введите новый состав:', menu.Sostav);
    const newkolvo = parseInt(prompt('Введите новое кол-во:', menu.kolvo));

    if (newre==="" || newnaz==="" || newcena<=0 || newSostav==="" || newkolvo<=0) {
      alert('Есть ошибки. Возможные варианты: \n1. Необходимо заполнить всё\n2. Цена и кол-во на складе не могут быть отрицательными');
      return
    }

    menu.restoran = newre;
    menu.nazvanie = newnaz;
    menu.cena = newcena;
    menu.Sostav = newSostav;
    menu.kolvo = newkolvo;
    updateMenu();
}