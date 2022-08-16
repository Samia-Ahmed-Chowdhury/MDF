//navbar mbl varsion
function show() {
    var toggle_btn = document.getElementById("toggle_btn");
    var slide = document.getElementById("slide");
    if (toggle_btn.checked == true) {
        slide.style.transform = "translateY(0px)"; slide.style.display = "block";
    } else {
        slide.style.transform = "translateY(-590px)"; slide.style.display = "none";
    }
}
//hero image animation
var activeImageId = 1;
var nextImageId = 1;

setInterval(function () {
    nextImageId = nextImageId + 1;
    if (nextImageId < 5) {
        document.getElementById("img" + activeImageId).classList.replace("visible", "hidden");
        document.getElementById("img" + nextImageId).classList.replace("hidden", "visible");
        activeImageId = nextImageId;

    } else {
        document.getElementById("img" + activeImageId).classList.replace("visible", "hidden");
        document.getElementById("img" + nextImageId).classList.replace("hidden", "visible");
        activeImageId = 5;
        nextImageId = 0;

    }
}, 1000);

///hero_btn animation

const buttons = document.querySelectorAll(".hero_btn");
buttons.forEach((button) => {
    button.onclick = function (e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripple = document.createElement("span");
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        this.appendChild(ripple);
        setTimeout(function () {
            ripple.remove();
        }, 600); // 1second = 1000ms
    }
});

// Countdown Success
let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue + '+';
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});


