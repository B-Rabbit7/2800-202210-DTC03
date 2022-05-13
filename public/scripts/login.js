$("#do-login").click(function() {
  $.ajax({
    type: "get",
    url: `http://localhost:5000/login/${document.getElementById("user").value}/${document.getElementById("pass").value}`,
    success: function (x){
      console.log(x);
      location.reload();
    }
  })
})

$("#do-create").click(function() {
  $.ajax({
    type: "put",
    url: `http://localhost:5000/create/${document.getElementById("user").value}/${document.getElementById("pass").value}`,
    success: function (x){
      console.log(x);
      location.reload();
    }
  })
})