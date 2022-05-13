let carts = document.querySelectorAll('.add-cart');

let products = [
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
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if ( productNumbers ){
        document.querySelector(' .cart span').textContent = productNumbers;
    }
}

function cartNumbers( product ){
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

    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productInCart');
    cartItems = JSON.parse(cartItems);

    if ( cartItems != null ){
        if ( cartItems[product.tag] == undefined ){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else{
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }
    }
    
    localStorage.setItem("productInCart",JSON.stringify(cartItems));
}

function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');

    if ( cartCost != null ){
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }else{
        localStorage.setItem("totalCost", product.price);
    }
    console.log(cartCost);
}

function displayCart(){
    let cartItems = localStorage.getItem("productInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');

    if ( cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map( item => {
            productContainer.innerHTML += `
            <tbody class="products">
                    <tr>
                        <td><img src="./assets/img/img-trangchu/${item.tag}.jpg" alt=""></td>
                        <td><h5>${item.name}</h5></td>
                        <td><h5>${item.price}000đ</h5></td>
                        <td>${item.inCart}</td>
                        <td><h5>
                            ${item.price * item.inCart},000đ;
                        </h5></td>
                        <td><a href=""><i class="ti-trash"></i></a></td>
                    </tr>
            </tbody>
            `;
        });
        let basket = document.querySelector(".cart-bottom-container");
        basket.innerHTML += `
            <div class="row">
                <div class="cart-bottom-note">
                    <h5>Ghi chú:</h5>
                    <textarea name="note" id="note" cols="70" rows="7"></textarea>
                </div>
            </div>
            <div class="row">
                <div class="cart-bottom-buy">
                    <h5>Giỏ hàng</h5>
                    <div class="cart-bottom-container">
                        <h6>Thành tiền</h6>
                        <h6>${cartCost}.000 đ</h6>
                    </div>
                    <button>THANH TOÁN</button>
                </div>
            </div>
        `
    }
}

onLoadCartNumbers();
displayCart();