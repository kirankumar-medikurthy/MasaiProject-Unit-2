    var open = document.getElementById("login")
    var close = document.getElementById("close1")
    // console.log(close)
    // console.log(open)
    open.addEventListener("click", function () {
      document.body.classList.add("popup-active");
    })
    close.addEventListener("click", function () {
      document.body.classList.remove("popup-active");
    })
    function loged() {
      var flage = false;
      var number = document.getElementById("num").value;
      let info = localStorage.getItem("info");
      info = JSON.parse(info);
      console.log(info);
      for (key in info) {
        console.log(info[key].numbers)
        if (info[key].numbers == number) {

          flage = true;
        }
      }
      if (flage == false) {

        alert("Number Not Found!");
      }
      else {
        location. href = "#home"
      }
    }
    let info = localStorage.getItem("info");
    info = JSON.parse(info);
    console.log(info);
    var btn = document.getElementById("btn")
    btn.addEventListener("click", loged)
