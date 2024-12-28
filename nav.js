function karuFunction() {
     document.getElementById("karuDropdown").classList.toggle("show");
     document.getElementById("menuDropdown").classList.remove("show");
}
function menuFunction() {
     document.getElementById("menuDropdown").classList.toggle("show");
     document.getElementById("karuDropdown").classList.remove("show");
}

window.onclick = function (e) {
     if (!e.target.matches('.dropbtn')) {
          var menuDropdown = document.getElementById("menuDropdown");
          if (menuDropdown.classList.contains('show')) {
               menuDropdown.classList.remove('show');
          }

          var karuDropdown = document.getElementById("karuDropdown");
          if (karuDropdown.classList.contains('show')) {
               karuDropdown.classList.remove('show');
          }
     }
}