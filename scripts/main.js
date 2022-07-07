// const headingText = document.querySelector("h1");
// let text = "Decade is Cool"
// headingText.textContent = text;

// // document.querySelector('html').addEventListener('click', function () {
// //     alert('Ouch! Stop poking me!');
// // });

// headingText.addEventListener("click", function () {
//     alert("You have clicked on title");
// });

let image = document.querySelector("img");

image.onclick = () => {
    let src = image.getAttribute("src");
    if (src === "images/decade.jpg") {
        image.setAttribute("src", "images/pepe_the_frog.jpg")
    }
    else {
        image.setAttribute("src", "images/decade.jpg")
    }
}

let button = document.querySelector("button");
const headingText = document.querySelector("h1");

function setPower() {
    let text = prompt("Please type a name...");
    if (!text) {
        setPower();
    }
    else {
        headingText.textContent = "Hello " + text;
    }
}

button.onclick = () => {
    setPower();
}

