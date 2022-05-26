loadSkeleton();
function loadSkeleton(){
    console.log($('#headerPlaceholder').load('../text/header.html'));
    console.log($('#footerPlaceholder').load('../text/footer.html'));
}
function openNav() {
  console.log("called opennav")
  document.getElementById("myNav").style.height = "100%";
}
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
// function closeNav() {
//   console.log("close")
//   // document.getElementById("myNav").style.height = "0%";
// }
