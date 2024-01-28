//Fade Effect
document.addEventListener("DOMContentLoaded", function () {
    console.log("Script executed!");
    var boxes = document.querySelectorAll(".box");
    boxes.forEach(function (box) {
        box.classList.add("fade_in");
    });
});