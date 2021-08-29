let count=0;
let checkOutDiv = document.getElementById('checkout');

let cart_data = JSON.parse(localStorage.getItem("cart"));
if (localStorage.getItem("cart") == null) {

  localStorage.setItem("cart", JSON.stringify([]));   //we need cart where we can store 

}
var quantity=0;
var quantity_Inner=1;
function addtoCart(p) {
  let cart_data = JSON.parse(localStorage.getItem('cart'));
  for(key in cart_data ){
    if(cart_data[key].name === p.name){
      
      alert("Already in cart!!")
      return;
    }
  }
  cart_data.push(p);
  localStorage.setItem("cart", JSON.stringify(cart_data));
  
  function Refresh() {
    window.parent.location = window.parent.location.href;
   }
Refresh();
}
checkCart();

 function remove2(){
   var dec= document.getElementById('decrease');
   dec.onclick=function(event){
     var parent= event.target.parentNode;
     window.location.reload()

     console.log(parent);
    //  if(quantity_Inner<1){
    //   var i= document.getElementById('') 
    //  }
    
   }

}
// function remove3(){
//   var dec= document.getElementById('');
//   dec.onclick=function(event){
//     var parent= event.target.parentNode;
//     console.log(parent);
//    //  if(quantity_Inner<1){
//    //   var i= document.getElementById('') 
//    //  }
   
//   }

// }
function removeCartItem(price_total , price,id_index) {
  quantity_Inner--;
  if(quantity_Inner<1){
    // var myobj = document.getElementById("id_index");
    // myobj.remove();
    remove2();
 
    function Refresh() {
      window.parent.location = window.parent.location.href;
     }
  Refresh();
    return;
  }
    
   
   console.log(price_total)
 var prices= Number(price)
  var c= document.getElementById('num_inc').textContent= quantity_Inner;
  var d=document.getElementById('prc').textContent= parseInt(quantity_Inner*price_total)
  // checkCart();
  var e=document.getElementById('subtotalPrice')
var f= parseInt(e.textContent);
// var calc= f+parseInt(quantity_Inner*price)-parseInt(price);
// console.log(calc)
var calc = f-parseInt(price);
e.textContent=calc
}
// checkCart();
function addCartItem1(price1,price){
  // remove3();
  var prices= Number(price)
     quantity_Inner++;
   
var c= document.getElementById('num_inc').textContent = quantity_Inner;
var d=document.getElementById('prc').textContent= quantity_Inner*price; 
var e=document.getElementById('subtotalPrice')
var f= parseInt(e.textContent);
var calc= f+parseInt(quantity_Inner*price)-parseInt(price);
// console.log(calc)

e.textContent=calc
 
 
}
document.getElementById("checkout").addEventListener("click",function(e) {
                    //  console.log(e.target);
             var num= document.getElementById('num_inc');
          
                   });
function createCartItem(food,quantity_Inner,id_index) {
  console.log(quantity_Inner)
  
  let li = document.createElement('li');
  li.setAttribute("id",id_index);
  // li.id = "listed"
  li.innerHTML = `
		<div class="cartItem">
		  <div class="cartItemDetails">
			<span class="category"></span>
			<div id="bgtotal">
			  <p class="cartItemName" style="font-family: 'Mulish', sans-serif;color:grey">${food.name}</p>
			  
			</div>
		  </div>
		  <div class="cartItemCount">
			<button id="decrease" onclick="removeCartItem('${food.price}','${Number(food.price)}','${id_index}')">-</button>
			<span id="num_inc">${Number(quantity_Inner)}</span>
			<button id="increase" onclick="addCartItem1('${food.price}','${Number(food.price)}')">+</button>
		  </div>
		  <div class="cartItemAmount">
			<span id= "prc">${Number(food.price)}</span>
		  </div>
		  </div>
      
   
	  `;
   
    // console.log(li.innerHTML )
    return li;
}
    
    // document.getElementById("decrease").addEventListener("click",function(e) {
    //                 console.log("abhi");
                
    //               });

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
            //  var div = document.getElementById("allCartItems");
            //  div.parentNode.removeChild(div);
            let allCartItems = document.createElement('div');
            allCartItems.id = 'allCartItems';
        
            let h2 = document.createElement('h2');
            
            h2.innerHTML = `Cart: `;
            h2.id="cartbg"
          
            let totalItems = document.createElement('span');
            totalItems.id = 'totalItems';
            totalItems.innerHTML = `${cart.length} Item`;
            h2.append(totalItems);
        
            let cardList = document.createElement('ul');
            cardList.id = 'cardList';
        
            for (let i = 0; i < cart.length; i++) {
              let li = createCartItem(cart[i],quantity_Inner,i);
              totalCartAmount += cart[i].price;
              cardList.append(li);
              
            }
            // localStorage.setItem('cart', JSON.stringify([]))
            let subTotal = document.createElement('div');
            subTotal.id = 'subtotal';
            subTotal.innerHTML = `
            <div class="subtotalTitle">
            <h3>SubTotal</h3>
            <p>Extra charges may apply</p>
            </div>
            <div id="subtotalPrice">${totalCartAmount}</div>`;
        
            let subtotalButton = document.createElement('button');
            subtotalButton.id = 'subtotalButton';
            subtotalButton.innerText = 'Checkout';
            subtotalButton.onclick = function () {
              window.location.href = './Payments.html';
            };
        
            allCartItems.append(h2, cardList, subTotal, subtotalButton);
            checkOutDiv.appendChild(allCartItems);
        
            localStorage.setItem('totalCartAmount', JSON.stringify(totalCartAmount));
          }
      }
      // function btnclick(){
      //   var hit = document.getElementsByClassName('increase');
      //   hit.addEventListener("click", btn5);
      //   function btn5(){
      //     addCartItem1();

      //   }
      // }