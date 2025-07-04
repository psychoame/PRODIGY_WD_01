// Show About section only when clicked
document.querySelector('a[href="#sectionabtss"]').addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("sectionabtss").style.display = "flex";
    document.getElementById("sectionhomepage").style.display = "none";
});

// Optional: Show Home again if clicked
document.querySelector('a[href="#sectionhomepage"]').addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("sectionhomepage").style.display = "flex";
    document.getElementById("sectionabtss").style.display = "none";
});
