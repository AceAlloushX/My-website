document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to my portfolio site!");
});
// Show the button after scrolling down 100px
window.onscroll = function() {
    var button = document.getElementById("backToTop");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
document.getElementById("backToTop").onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
