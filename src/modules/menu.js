import menuData from "../data/menu-data";

export default function creatMenuPage() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-container');

    const menuHeader = document.createElement('h2');
    menuHeader.classList.add('menu-header');
    menuHeader.textContent = '菜单列表';

    const menuList = document.createElement('ul');
    menuList.classList.add('menu-list');

    menuData.forEach((data) => {
        const dish = document.createElement('li');
        dish.classList.add('dish-item');
        dish.id = data.id;

        const dishName = document.createElement('h3');
        dishName.classList.add('dish-name');
        dishName.textContent = data.name;

        const dishPrice = document.createElement('p');
        dishPrice.classList.add('dish-price');
        dishPrice.textContent = '¥' + data.price;
        //暂时先这么多，菜单描述和图片后续考虑

        dish.appendChild(dishName);
        dish.appendChild(dishPrice);
        menuList.appendChild(dish);
    })

    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(menuList);

    return menuDiv;
}