document.addEventListener('DOMContentLoaded', function () {
    var dataText = [
        "Welcome to Nish Online,",

        "Welcome to Nish Digital."
    ];

    let target = document.getElementById("welcome-text"); // Fixes incorrect selector

    if (!target) return console.error("Error: Target element #welcome-text not found!");

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            target.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        } else if (typeof fnCallback === 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    function StartTextAnimation(i) {
        if (i >= dataText.length) {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 2000);
        } else {
            typeWriter(dataText[i], 0, function () {
                setTimeout(function () {
                    StartTextAnimation(i + 1);
                }, 2000);
            });
        }
    }

    StartTextAnimation(0);
});

/* Smooth Scroll */
document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 60,
                behavior: "smooth"
            });
        }
    });
});

/* Navbar Background Adaptation */
window.addEventListener("scroll", function () {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.style.background = "rgba(255, 255, 255, 0.8)";
    } else {
        nav.style.background = "rgba(255, 255, 255, 0.2)";
    }
});


/* About Section type effect */
document.addEventListener("DOMContentLoaded", function () {
    const aboutHeading = document.querySelector(".about-heading");
    if (!aboutHeading) return console.error("Error: .about-heading not found!");

    const text = "More About Nish";
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            aboutHeading.innerHTML = text.substring(0, i + 1);
            setTimeout(typeWriter, 100);
            i++;
        } else {
            aboutHeading.innerHTML = text; // Remove cursor after typing
        }
    }

    typeWriter();
});
