$("#do-login").click(function() {
  $.ajax({
    type: "get",
    url: `http://learninghub-env.eba-7q6hwca8.us-west-1.elasticbeanstalk.com/login/${document.getElementById("user").value}/${document.getElementById("pass").value}`,
    success: function (x){
      console.log(x);
      window.location.href = 'http://localhost:5000';
    }
  })
})

$("#do-create").click(function() {
  $.ajax({
    type: "put",
    url: `http://learninghub-env.eba-7q6hwca8.us-west-1.elasticbeanstalk.com/create/${document.getElementById("user").value}/${document.getElementById("pass").value}`,
    success: function (x){
      console.log(x);
      location.reload();
    }
  })
})

$("#logout").click(function() {
  $.ajax({
    type: "get",
    url: 'http://learninghub-env.eba-7q6hwca8.us-west-1.elasticbeanstalk.com/logout',
    success: function (x){
      console.log(x);
      window.location.href = 'http://localhost:5000';
    }
  })
})