'use strict';

(() => {
    const infosliders = document.querySelector('.infosliders');

    if (infosliders) {
        const widthSlide = 300; // аналогично width в css/infosliders
        const transitionMove = 2000;  // аналогично transition в css/infoslider        

        const slides = infosliders.querySelectorAll('.infoslider');     // получаем все слайды
        let step = 0;
        let offset = 0;

        // очищаем область вывода слайдов
        while (infosliders.children.length) {
            infosliders.removeChild(infosliders.lastChild);
        }

        // отрисовка слайда
        function draw() {
            let slide = slides[step];
            slide.style.left = offset * widthSlide + 'px';
            infosliders.appendChild(slide);

            if (step + 1 == slides.length) { step = 0; } else { step++; }

            offset = 1;
        }

        // смещение слайда
        function move() {
            let slidesMove = infosliders.querySelectorAll('.infoslider');
            let slidesOffset = 0;

            slidesMove.forEach(slide => {
                slide.style.left = slidesOffset * widthSlide - widthSlide + 'px';
                slidesOffset++;
            });

            setTimeout(() => {
                slidesMove[0].remove();
                draw();
            }, transitionMove);

            setTimeout(move, 5000);
        }

        draw();
        draw();
        setTimeout(move, transitionMove);
    }
})();