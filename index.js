document.addEventListener('DOMContentLoaded', function () {
    var dataText = ["welcome to nish online.", "welcome to nish's space.", "welcome to nish digital."];

    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            document.querySelector(".Welcome").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';
            setTimeout(function () {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        } else if (typeof fnCallback == 'function') {
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
                StartTextAnimation(i + 1);
            });
        }
    }

    StartTextAnimation(0);
});
