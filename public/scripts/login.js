$("#do-login").click(function() {
  $.ajax({
    type: "get",
    url: `http://learninghub-env.eba-7q6hwca8.us-west-1.elasticbeanstalk.com/login/${document.getElementById("user").value}/${document.getElementById("pass").value}`,
    success: function (data){
      console.log(data);
      if (data) {
        window.location.href = 'http://learninghub-env.eba-7q6hwca8.us-west-1.elasticbeanstalk.com';
      } else {
        $("#login").append(`<br><div class="alertfailure">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        Login failed.
        </div>`);
      }
    },
    error: function() {
      $("#login").append(`<br><div class="alertfailure">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        Login failed.
        </div>`);
    }
  })
})

$("#do-create").click(function() {
  $.ajax({
    type: "put",
    url: `http://learninghub-env.eba-7q6hwca8.us-west-1.elasticbeanstalk.com/create/${document.getElementById("user").value}/${document.getElementById("pass").value}`,
    success: function (x){
      if (x) {
        console.log(x);
        $("#login").append(`<br><div class="alertsuccess">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        Successfully created account.
        </div>`);
      } else {
        $("#login").append(`<br><div class="alertfailure">
        <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
        <p>Failed to create account.</p><p>Username and password combination is taken.</p>
        </div>`);
      }
    }
  })
})

$("#logout").click(function() {
  $.ajax({
    type: "get",
    url: 'http://learninghub-env.eba-7q6hwca8.us-west-1.elasticbeanstalk.com/logout',
    success: function (x){
      console.log(x);
      window.location.href = 'http://learninghub-env.eba-7q6hwca8.us-west-1.elasticbeanstalk.com';
    }
  })
})

// Get all elements with class="closebtn"
var close = document.getElementsByClassName("closebtn");
var i;

// Loop through all close buttons
for (i = 0; i < close.length; i++) {
  // When someone clicks on a close button
  close[i].onclick = function(){

    // Get the parent of <span class="closebtn"> (<div class="alert">)
    var div = this.parentElement;

    // Set the opacity of div to 0 (transparent)
    div.style.opacity = "0";

    // Hide the div after 600ms (the same amount of milliseconds it takes to fade out)
    // setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}