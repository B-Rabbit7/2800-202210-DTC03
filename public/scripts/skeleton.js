// Loads skeleton
loadSkeleton();
function loadSkeleton(){
    console.log($('#headerPlaceholder').load('../text/header.html'));
    console.log($('#footerPlaceholder').load('../text/footer.html'));
}

// Controls Navbar
function openNav() {
  console.log("called opennav")
  document.getElementById("myNav").style.height = "100%";
}
  
