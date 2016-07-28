
// DROPDOWN MENU //
var myFunction = function () {
    document.getElementById("myDropdown").classList.toggle("show");
};

window.onclick = function(event) {
  if (!event.target.matches('.fa-bars')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
// DROPDOWN MENU //