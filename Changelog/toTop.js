let totopbutton = document.getElementById("toTop");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
     if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
          totopbutton.style.display = "block";
     } else {
          totopbutton.style.display = "none";
     }
}
function toTop() {
     document.body.scrollTo({ top: 0, behavior: 'smooth' });
     document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
}