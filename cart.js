let carts = document.querySelectorAll('.add-cart');

let product = [
    {
        name: 'Khổ qua - 350gr',
        tag: 'khoqua350gr',
        price: 9,
        inCart: 0
    },
    {
        name: 'Khoai môn - 500gr',
        tag: 'khoaimon500gr',
        price: 30,
        inCart: 0
    },
    {
        name: 'Khoai lang tím - 1kg',
        tag: 'khoailamtim1kg',
        price: 35,
        inCart: 0
    },
    {
        name: 'Khoai lang Nhật - 1kg',
        tag: 'khoailangnhat1kg',
        price: 25,
        inCart: 0
    },
    {
        name: 'Cà chua bi thường - 300gr',
        tag: 'cachuabithuong300gr',
        price: 9,
        inCart: 0
    },
    {
        name: 'Hành tím - 250gr',
        tag: 'hanhtim250gr',
        price: 15,
        inCart: 0
    },
    {
        name: 'Gừng - 200gr',
        tag: 'gung200gr',
        price: 6,
        inCart: 0
    },
    {
        name: 'Dưa leo Nhật - 400gr',
        tag: 'dualeonhat400gr',
        price: 15,
        inCart: 0
    },
    {
        name: 'Xà lách Romaine - 130gr',
        tag: 'xalachromaine130gr',
        price: 7,
        inCart: 0
    },
    {
        name: 'Xà lách Mỡ - 130gr',
        tag: 'xalachmo130gr',
        price: 7,
        inCart: 0
    },
    {
        name: 'Xà lách lô lô tím - 100gr',
        tag: 'xalachlolotim100gr',
        price: 7,
        inCart: 0
    },
    {
        name: 'Xà lách Ice Berg - 100gr',
        tag: 'xalachiceberg100gr',
        price: 7,
        inCart: 0
    },
    {
        name: 'Xà lách Frise - 100gr',
        tag: 'xalachfrise100gr',
        price: 5,
        inCart: 0
    },
    {
        name: 'Tỏi - 250gr',
        tag: 'toi250gr',
        price: 28,
        inCart: 0
    },
    {
        name: 'Su su non - 300gr',
        tag: 'susunon300gr',
        price: 10,
        inCart: 0
    },
    {
        name: 'Su su - 400gr',
        tag: 'susu400gr',
        price: 5,
        inCart: 0
    }
];

for ( let i=0 ; i < carts.length ; i++ ){
    carts[i].addEventListener('click', () => {
        cartNumbers();
    });
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if ( productNumbers ){
        document.querySelector(' .cart span').textContent = productNumbers;
    }
}

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if ( productNumbers ){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector(' .cart span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector(' .cart span').textContent = 1;
    }
}
onLoadCartNumbers();