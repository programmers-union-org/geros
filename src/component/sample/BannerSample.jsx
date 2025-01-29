import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.css';

// Importing slick-carousel after jQuery
import 'slick-carousel';

const BannerSample = () => {
    const sliderRef = useRef(null);
    const progressRef = useRef(null);
    const [isPause, setIsPause] = useState(false);
    const [percentTime, setPercentTime] = useState(0);
    const time = 2; // Adjust this value to set the time range for the progress bar
    let tick;

    useEffect(() => {
        const $slider = $(sliderRef.current);
        const $bar = $(progressRef.current);

        $slider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            // dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed:  7000, // Set the autoplay speed to match the time variable
        });

        $slider.find('.slick-dots').append("<li class='animated-dot'></li>");

        $(document).on('click', '.slick-dots .animated-dot', function () {
            const $dot = $(this);
            $dot.toggleClass('play');
            if ($dot.hasClass('play')) {
                setIsPause(true);
                $dot.css('background-image', 'url(https://img.icons8.com/plasticine/100/000000/pause.png)');
                $slider.slick('slickPause');
                $bar.css({ width: '100%' });
            } else {
                setIsPause(false);
                $dot.css('background-image', '');
                $slider.slick('slickPlay');
            }
        });

        function startProgressbar() {
            resetProgressbar();
            setPercentTime(0);
            setIsPause(false);
            tick = setInterval(interval, 10);
        }

        function interval() {
            if ($('.slick-dots .animated-dot').hasClass('play')) {
                setIsPause(true);
            }
            if (!isPause) {
                setPercentTime((prev) => {
                    const newPercent = prev + 1 / (time * 100); // Adjust the increment based on the time variable
                    $bar.css({ width: `${newPercent}%` });
                    if (newPercent >= 100) {
                        $slider.slick('slickNext');
                        startProgressbar();
                    }
                    return newPercent;
                });
            }
        }

        function resetProgressbar() {
            $bar.css({ width: '0%' });
            clearTimeout(tick);
        }

        startProgressbar();

        $slider.on('beforeChange', () => {
            resetProgressbar();
            startProgressbar();
        });

        return () => {
            clearTimeout(tick);
            $slider.slick('unslick');
        };
    }, [isPause, time]);

    return (
        <>
            <section className="slider-wrapper">
                <div className="slider" ref={sliderRef}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                </div>
            </section>
            <li className="splide__slide is-visible is-active list-none">
      <div className="css-3um24x">
        <div className="pagination__progress css-13pjqad rounded-full">
          <div style={{ WebkitAnimationDuration: '7s', animationDuration: '7s' }} className="progress-bar"></div>
        </div>
      </div>
    </li>
        </>
    );
};

export default BannerSample;
