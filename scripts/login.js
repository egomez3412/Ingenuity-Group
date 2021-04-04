function validate() {
   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;
   if (username == "user" && password == "pass") {
      alert("Login successfully");
      window.location = "index.html"; // Redirecting to other page.
      return false;
   } else {
      alert("fail");
   }
}
$('.message a').click(function () {
   $('form').animate({
      height: "toggle",
      opacity: "toggle"
   }, "slow");
});