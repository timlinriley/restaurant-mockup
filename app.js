// make a menu object that contains objects of items
class MenuItem {
    constructor(name, description, price){
    this.name = name;
    this.description = description;
    this.price = price;
    }
}

const entr1 = new MenuItem('Grilled 16oz Ribeye', 'Dry aged 16 oz ribeye steak served with roasted potatoes and creamed spinach', '$49.99')

const entr2 = new MenuItem('Roast Chicken', '1/2 roasted chicken served with moros and plantains', '$29.99')

const entr3 = new MenuItem('Salmon', 'Grilled salmon filet served with baked sweet potato and asparagus spears', '$39.99')

const entr4 = new MenuItem('Pasta Bolognese','Housemade fresh rigatoni pasta with a 8 hour bolognese sauce', '$31.99')

const entr5 = new MenuItem('Caesar Salad', 'Classic Caesar salad with croutons', '$24.99, add grilled chicken brest for +$8.99')

const app1 = new MenuItem('Fried Calamari', 'Calamari breaded and fried served with marinara sauce', '$19.99')

const app2 = new MenuItem('Antipasto', 'Mixed greens, sliced salami and provolone, red onion, olives, tomato, pepperoncini, sauteed mushrooms, artichoke, topped with cuts of sharp provolone', '$14.99')

const app3 = new MenuItem('Baked Clams', 'Little neck clams baked Oreganata style', '$13.99')

const app4 = new MenuItem('Potato Croquettes', 'Crispy potato and cheese croquettes', '$12.99')

const app5 = new MenuItem('Garlic Bread', 'Classic garlic bread', '$9.99')

const des1 = new MenuItem('Apple Pie', 'Old fashioned Apple Pie, served with a scoop of vanilla ice cream', '$9.99')

const des2 = new MenuItem('chocolate Lava Cake', 'A decadent chocolate lava cake served hot with scoop of vanilla ice cream')

const des3 = new MenuItem('New York Style Cheesecake', 'Classic. iykyk', '$9.99')

const bev1 = new MenuItem('Pinot Noir', 'A dry red wine on the ligther side. From France', '$12.99')

const bev2 = new MenuItem('Cabernet Sauvignon', 'A rich red wine with notes of vanilla and cherry. Pair with your steak or bolognese', '$12.99')

const bev3 = new MenuItem('Sauvignon Blanc', 'A dry white wine perfect for your slamon or chicken', '$13.99')

const bev4 = new MenuItem('Chardonnay', 'An elegant white wine', '$14.99')

const bev5 = new MenuItem('IPA', 'A hoppy pale ale', '$8')

const bev6 = new MenuItem('Pilsner', 'European style pilsner', '$8')

const bev7 = new MenuItem('Lager', 'American style lager', '$8')

const bev8 = new MenuItem('Guinness', 'Irish stout', '$8')

let entArr = []
entArr.push(entr1,entr2,entr3,entr4,entr5)

// let appArr = []
// appArr.push(app1,app2,app3,app4,app5)

// const showApp = () =>{
// let item = document.querySelectorAll('.name')
// for (const {name} of appArr){
//     item.innerHTML = name
// console.log(name)
// }
// }
let appArr = [
    {
        name: 'Fried Calamari',
        description:'Calamari breaded and fried served with marinara sauce' ,
        price: '$19.99', 
    },
    {
        name: 'Antipasto',
        description:'Mixed greens, sliced salami and provolone, red onion, olives, tomato, pepperoncini, sauteed mushrooms, artichoke, topped with cuts of sharp provolone' ,
        price: '$14.99',
    },
    {
        name: 'Baked Clams',
        description: 'Little neck clams baked oreganato style',
        price:'$13.99' ,
    },
    {
        name: 'Potato Croquettes',
        description: 'Crispy potato and cheese croquettes',
        price: '$12.99',
    },
    {
        name: 'Garlic Bread',
        description: 'Classic garlic bread',
        price: '$9.99',
    }
]
let dinArr = [
    {
        name:'Grilled 16oz Ribeye' ,
        description: 'Dry aged 16 oz ribeye steak served with roasted potatoes and creamed spinach',
        price: '$14.99',
    } ,
       {
        name: 'Roast Chicken',
        description: '1/2 roasted chicken served with moros and plantains',
        price: '$29.99',
    },
        {
        name: 'Salmon',
        description:'Grilled salmon filet served with baked sweet potato and asparagus spears',
        price: '$39.99',
    },
        {
        name: 'Pasta Bolognese',
        description: 'Housemade fresh rigatoni pasta with a 8 hour bolognese sauce',
        price: '$31.99',
    },
        {
        name: 'Caesar Salad',
        description: 'Classic Caesar salad with croutons',
        price: '$24.99, add grilled chicken breast for +$8.99',
    }
]
let bevArr = [
    {
        name:'Pinot Noir',
        description:'A dry red wine on the ligther side. From France',
        price: '$12.99',
    },
        {
        name: 'Cabernet Sauvignon',
        description: 'A rich red wine with notes of vanilla and cherry. Pair with your steak or bolognese',
        price: '12.99',
    },
        {
        name: 'Sauvignon Blanc',
        description: 'A dry white wine perfect for your salmon or chicken',
        price:'$12.99' ,
    },
        {
        name: 'Chardonnay',
        description: 'An elegant white wine',
        price: '$13.99',
    },
        {
        name: 'IPA',
        description: 'A hoppy pale ale' ,
        price: '$8',
    },
        {
        name: 'Pilsner',
        description: 'European style pilsner',
        price: '$8',
    },
        {
        name: 'Lager' ,
        description: 'American style lager' ,
        price: '$8',
    },
        {
        name: 'Guinness',
        description: 'An Irish stout',
        price: '$8',
    }
]

let desArr = [
    {
        name: 'Apple Pie' ,
        description: 'Old Fashioned Apple Pie' ,
        price: '$9.99',
    },
    {
        name: 'Chocolate Lava Cake' ,
        description: 'A decadent chocolate lava cake served hot with scoop of vanilla ice cream' ,
        price: '$8',
    },
    {
        name: 'NY Style Cheesecake' ,
        description: 'Classic. ifykyk' ,
        price: '$9.99',
    },
]
const populateApps=()=>{
    appArr.forEach((object)=>{
        createItemBox(object)
    })
}

const populateDin=()=>{
    dinArr.forEach((object)=>{
        createItemBox(object)
    })
}
const populateBev=()=>{
    bevArr.forEach((object)=>{
        createItemBox(object)
    })
}
const populateDes=()=>{
    desArr.forEach((object)=>{
        createItemBox(object)
    })
}
const createItemBox = (obj) => {
    let main = document.querySelector('.menuBox')
    let mainItem = document.createElement('div')
    mainItem.setAttribute('class', 'item')
    let nameBox = document.createElement('div')
    nameBox.setAttribute('class', 'name')
    let descriptionBox = document.createElement('div')
    descriptionBox.setAttribute('class', 'desc')
    let priceBox = document.createElement('div')
    priceBox.setAttribute('class','price')
    nameBox.innerHTML = obj.name;
    descriptionBox.innerHTML = obj.description;
    priceBox.innerHTML = obj.price;

mainItem.append(nameBox)
mainItem.append(priceBox)
mainItem.append(descriptionBox)
main.append(mainItem)

}
const ev = document.querySelector('.apps')
ev.addEventListener('click', populateApps)

const ev2 = document.querySelector('.din')
ev2.addEventListener('click', populateDin)

const ev3 = document.querySelector('.bev')
ev3.addEventListener('click', populateBev)

const ev4 = document.querySelector('.des')
ev4.addEventListener('click', populateDes)


// let Discounts ={
//     birthday: 10,
//     vday: 14,
//     friendsandfamily: 25,

// }