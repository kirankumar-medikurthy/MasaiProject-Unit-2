let checkOutDiv = document.getElementById('checkout');

let cart_data = JSON.parse(localStorage.getItem("cart"));
if (localStorage.getItem("cart") === null) {

    localStorage.setItem("cart", JSON.stringify([])); //we need cart where we can store 

}
var quantity = 1;

function addtoCart(p) {
    let cart_data = JSON.parse(localStorage.getItem('cart'));
    for (let i = 0; i < cart_data.length; i++) {
        if (cart_data[i].id === p) {
            quantity++;
        }
    }
    cart_data.push(p);
    localStorage.setItem("cart", JSON.stringify(cart_data));
    checkCart();

}
checkCart();

function removeCartItem(id) {
    let cartItems = JSON.parse(localStorage.getItem('cart'));
    let newCartItems = [];
    for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].name == id && cartItems[i].quantity <= 1) continue;
        else if (cartItems[i].name == id) cartItems[i].quantity--;
        newCartItems.push(cartItems[i]);
    }
    localStorage.setItem('cart', JSON.stringify(newCartItems));
    checkCart();
}



function createCartItem(food) {
    let li = document.createElement('li');
    li.innerHTML = `
		<div class="cartItem">
		  <div class="cartItemDetails">
			<span class="category"></span>
			<div>
			  <p class="cartItemName">${food.name}</p>
			  <p class="cartItemAddon">
				Mexican Potato Salsa Wrap (Default Option),Mexican
				Potato Salsa Wrap (Default Option),
			  </p>
			</div>
		  </div>
		  <div class="cartItemCount">
			<button id="decrease" onclick="removeCartItem(${food.id})">-</button>
			<span>${Number(food.quantity)}</span>
			<button id="increase" onclick="addtoCart(${food.id})">+</button>
		  </div>
		  <div class="cartItemAmount">
			<span>₹ ${Number(food.price) * Number(food.quantity)}</span>
		  </div>
		</div>
	  `;
    return li;
}


function checkCart() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if (cart == null || cart.length == 0) {
        checkOutDiv.innerHTML = `<h2  style="
      font-size: 20px;color: rgb(51, 51, 51); font-family: 'Mulish', sans-serif;">Empty Cart</h2>
          <div class="emptyCart">
            <img
              id="emptyCartImage"
              src="./images/emptyCart.svg"
              alt="empty cart"
            style="width:270px;margin:20px 2px 2px 20px"/>
            <p style="width:270px;margin:auto;text-align:center;    color: rgb(153, 153, 153);
            font-weight: 500;">Empty Cart is a sign of an empty stomach.</p>
          </div>`;
    } else {
        let totalCartAmount = 0;

        let allCartItems = document.createElement('div');
        allCartItems.id = 'allCartItems';

        let h2 = document.createElement('h2');

        h2.innerHTML = `Cart: `;

        let totalItems = document.createElement('span');
        totalItems.id = 'totalItems';
        totalItems.innerHTML = `${cart.length} Item`;
        h2.append(totalItems);

        let cardList = document.createElement('ul');
        cardList.id = 'cardList';

        for (let i = 0; i < cart.length; i++) {
            let li = createCartItem(cart[i]);
            totalCartAmount += cart[i].price * cart[i].quantity;
            cardList.append(li);
        }
        let subTotal = document.createElement('div');
        subTotal.id = 'subtotal';
        subTotal.innerHTML = `
            <div class="subtotalTitle">
            <h3>SubTotal</h3>
            <p>Extra charges may apply</p>
            </div>
            <div id="subtotalPrice">₹ ${totalCartAmount}</div>`;

        let subtotalButton = document.createElement('button');
        subtotalButton.id = 'subtotalButton';
        subtotalButton.innerText = 'Checkout';
        subtotalButton.onclick = function() {
            window.location.href = '../pages/checkOut.html';
        };

        allCartItems.append(h2, cardList, subTotal, subtotalButton);
        checkOutDiv.appendChild(allCartItems);

        localStorage.setItem('totalCartAmount', JSON.stringify(totalCartAmount));
    }
}