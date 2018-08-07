(function () {
    let next = document.querySelector('#next');
    let previous = document.querySelector('#previous');
    let images = document.querySelectorAll('img');

    let slideIndex = 1;
    showDivs(slideIndex); // shows the first image at start;

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function showDivs(n) {
        if (n > images.length) { // if the index of the n-th picture is longer than the whole array
            slideIndex = 1; // then the index is 1;
        }
        if (n < 1) { // if the index is less than one, then back to the length of the array
            slideIndex = images.length;
        }
        for (let i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }
        images[slideIndex - 1].style.display = "inline";
        images[slideIndex - 1].classList.add('animation');
    }

    let onNextImage = () => {
        plusDivs(1);
    };

    let onPreviousImage = () => {
        plusDivs(-1);
    };

    next.addEventListener('click', onNextImage);
    previous.addEventListener('click', onPreviousImage);
})();