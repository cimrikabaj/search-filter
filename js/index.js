const items = [
    { name: 'Apple', img: 'images/apple.jpg' },
    { name: 'Banana', img: 'images/banana.jpg' },
    { name: 'Orange', img: 'images/orange.jpg' },
    { name: 'Pineapple', img: 'images/pineapple.jpg' },
    { name: 'Grapes', img: 'images/grapes.jpg' },
    { name: 'Watermelon', img: 'images/watermelon.jpg' },
    { name: 'Mango', img: 'images/mango.jpg' },
    { name: 'Strawberry', img: 'images/strawberry.jpg' },
    { name: 'Blueberry', img: 'images/blueberry.jpg' },
    { name: 'Raspberry', img: 'images/raspberry.jpg' },
    { name: 'Kiwi', img: 'images/kiwi.jpg' },
    { name: 'Peach', img: 'images/peach.jpg' },
    { name: 'Plum', img: 'images/plum.jpg' },
    { name: 'Cherry', img: 'images/cherry.jpg' },
    { name: 'Papaya', img: 'images/papaya.jpg' }
];

const searchInput = document.getElementById('searchInput');
const itemList = document.getElementById('itemList');


function displayItems(items) {
    itemList.innerHTML = ''; 
    items.forEach(item => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const text = document.createElement('span');

        img.src = item.img;
        img.alt = item.name;
        text.textContent = item.name;

        li.appendChild(img);
        li.appendChild(text);
        itemList.appendChild(li);
    });
}


function filterItems(query) {
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
    );
    displayItems(filteredItems);
}

searchInput.addEventListener('input', () => {
    filterItems(searchInput.value);
});


displayItems(items);