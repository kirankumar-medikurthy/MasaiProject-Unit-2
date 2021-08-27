let mydata = localStorage.getItem("loggedData");
myStoredata = JSON.parse(mydata);

function showProduct() {
    
    let dataDiv = document.getElementById("userBox");
    let dataname = document.getElementById("theName");
    myStoredata.forEach(function (product) {

    let Lname = document.createElement('h3');
    Lname.innerText = product.names;
    Lname.id = "prodName"

    let sname = document.createElement('h3');
    sname.innerText = product.names;
    sname.id = "theName"

    dataDiv.append(Lname)
    dataname.append(sname);
    });
}
showProduct()


let mydata1 = localStorage.getItem("loggedData");
myStoredata1 = JSON.parse(mydata1);


function showProduct1() {
    
    let dataDivs = document.getElementById("userBox1");
    let datanum = document.getElementById("theNumber");

    myStoredata1.forEach(function (product) {
        let numbers = document.createElement('h3');
        numbers.innerText = product.numbers;
        numbers.id = "prodName"

        let numb = document.createElement('p');
        numb.innerText = product.numbers;
        numb.id = "theNumber"

        dataDivs.append(numbers);
        datanum.append(numb);
    });
}
showProduct1()


let mydata3 = localStorage.getItem("loggedData");
myStoredata3 = JSON.parse(mydata3);


function showProduct2() {
    
    let dataDivs1 = document.getElementById("userBox2");
    let mails = document.getElementById("theEmail");
    myStoredata3.forEach(function (product) {
     
    let email = document.createElement('h3');
    email.innerText = product.emails;
    email.id = "prodName"

    let emaildata = document.createElement('p');
    emaildata.innerText = product.emails;
    emaildata.id = "theEmail"

        dataDivs1.append(email)
        mails.append(emaildata)
    });
}
showProduct2()


function showProduct4() {
    
    let dataDiv = document.getElementById("userName");
    myStoredata.forEach(function (product) {

    let Lname = document.createElement('p');
    Lname.innerText = product.names;
    Lname.style.background = "white"

    dataDiv.append(Lname)
    });
}
showProduct4()