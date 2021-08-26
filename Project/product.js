if (localStorage.getItem('Fassos-Foods') == null) {
  const foodItems = [
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '2 Signature Veg Wraps at 289',
      img_src: 'https://product-assets.faasos.io/production/product/image_1622813195694_image_es_1618555841315_2%20Signature%20Veg%20Wraps%20%40279.jpg',
      price: 289,
      rating: 5,
      boughtTimes: '296',
      description: 'Amazing wraps and savings! What else...',
      veg_nonVeg: 'veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Classic Veg Wraps at 349',
      img_src:
        'https://product-assets.faasos.io/production/product/image_1622813789447_image_es_1618555665605_4%20Classic%20Veg%20Wraps%20%40329.jpg',
      price: 349,
      rating: 5,
      boughtTimes: '220',
      description:
        'Get spoiled with surprises and savings t...',
      veg_nonVeg: 'veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Signature Veg Wraps at 529',
      img_src:
        'https://product-assets.faasos.io/production/product/image_1622813862514_image_es_1618555549918_4%20Signature%20Veg%20Wraps%20%40519.jpg',
      price: 529,
      rating: 5,
      boughtTimes: '39',
      description:
        'All smiles for surprise. All hearts for savi..',
      veg_nonVeg: 'veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '3 Signature Veg Wraps at 399',
      img_src:
        'https://product-assets.faasos.io/production/product/image_1622813953613_image_es_1618555724773_3%20Signature%20Veg%20Wraps%20%40389.jpg',
      price: 399,
      rating: 5,
      boughtTimes: '56',
      description:
        'Lip-smacking flavours at jaw-dropping sav...',
      veg_nonVeg: 'veg',
    },

    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Signature Veg Wraps at 529',
      img_src: 'https://product-assets.faasos.io/production/product/image_1622813862514_image_es_1618555549918_4%20Signature%20Veg%20Wraps%20%40519.jpg',
      price: 529,
      rating: 5,
      boughtTimes: '39 ',
      description: 'Savings upto Rs. 230 & many flavour-pac...',
      veg_nonVeg: 'veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Signature NonVeg Wraps at..',
      img_src:'https://product-assets.faasos.io/production/product/image_1622813915507_image_es_1618555480375_4%20Signature%20NonVeg%20Wraps%20%40589.jpg',
      price: 599,
      rating: 5,
      boughtTimes: '220',
      description:'Fantastic combos from Faasos hall of fame...',
      veg_nonVeg: 'Non-veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Signature Veg Wraps at 529',
      img_src:
        'https://product-assets.faasos.io/production/product/image_1622813862514_image_es_1618555549918_4%20Signature%20Veg%20Wraps%20%40519.jpg',
      price: 529,
      rating: 5,
      boughtTimes: '39',
      description:'Savings upto Rs. 230 & many flavour-packe..',
      veg_nonVeg: 'veg',
    },
    {
      packdetails: 'Daily Value Wrap Combos (Save Upto 40% Extra)',
      name: '4 Signature NonVeg Wraps at',
      img_src:'https://product-assets.faasos.io/production/product/image_1622813953613_image_es_1618555724773_3%20Signature%20Veg%20Wraps%20%40389.jpg',
      price: 599,
      rating: 5,
      boughtTimes: '56',
      description:'Fantastic combos from Faasos hall of fam..',
      veg_nonVeg: 'veg',
    },
  ];
  localStorage.setItem('Fassos-Foods', JSON.stringify(foodItems))
}

function showProduct(fooddetail) {
  let cartData = fooddetail
  let dataDiv = document.getElementById("productArea");
  dataDiv.innerHTML = null;


    cartData.forEach(function (product) {
    let div = document.createElement("div")
    div.id = "prod"

    let packdetails = document.createElement('p');
    packdetails.innerText = product.packdetails;
    packdetails.id = "packdetails"

    let pname = document.createElement('p');
    pname.innerText = product.name;
    pname.id = "prodname"

    let cl = document.createElement('div');
    cl.id = 'clear'

    let prating = document.createElement('p');
    prating.innerText = product.rating;
    prating.id = "prodRate"

    let pprice = document.createElement('p');
    pprice.innerText = "₹ " + product.price;
    pprice.id = "prodPrice"

    let btime = document.createElement('p');
    btime.innerText = product.boughtTimes + ' bought this';
    btime.id = "boughtTimes"

    let pdesc = document.createElement('p');
    pdesc.innerText = product.description;
    pdesc.id = "proddescription"

    let readMore = document.createElement('p');
    readMore.innerText = "Read More";
    readMore.id = "readMore"

    let Customisable = document.createElement('p');
    Customisable.innerText = "Customisable";
    Customisable.id = "Customisable"

    Customisable
    let star = document.createElement('img');
    star.src = "./images/star.png"
    star.id = "star"

    let btn = document.createElement("button");
    btn.innerText = "Add";
    btn.id = "button"

    btn.onclick = function () {
      addtoCart(product);
    };
    let pveg_nonVeg = document.createElement('ps');
    pveg_nonVeg.innerText = product.veg_nonVeg;
    pveg_nonVeg.id = "pveg_nonVeg"

    let image = document.createElement('img');
    image.src = product.img_src;
    image.id = "prodImage"
    div.append(image, pname, pveg_nonVeg, cl, pprice, cl, pdesc,cl, readMore, star,btn,cl,btime,  Customisable);
    dataDiv.append(div)

  });
}
showProduct(JSON.parse(localStorage.getItem('Fassos-Foods')));