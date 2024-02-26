const user = {id: 1, Name: 'Gorib Amir', job: 'actor'};
// Javascript Object Notation (JSON)
// console.log(user);
const stringifi = JSON.stringify(user);
// console.log(stringifi);

const shop = {
    owner: 'alif',
    address: {
        street: 'kochukhet',
        city: 'Ranbir',
        country: 'bangladesh'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.shopJSON;
console.log(shopObj);