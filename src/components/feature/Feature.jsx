import React, { useEffect } from 'react';
import './Feature.css';

import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

const Feature = () => {
    useEffect(() => {
        const carousel = document.querySelector('.carousel');
        const arrowBtns = document.querySelectorAll('.arrow-icon');
        const firstCardWidth = carousel.querySelector('.card').offsetWidth;
        const carouselChildren = [...carousel.children];

        let isDragging = false, startX, startScrollLeft;

        // Get the number of cards that can fit in the carousel at once
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        // Insert copies of the last few cards at the beginning of the carousel for infinite scrolling
        carouselChildren.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
        });

        // Insert copies of the first few cards at the end of the carousel for infinite scrolling
        carouselChildren.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML('beforeend', card.outerHTML);
        });

        const handleArrowClick = (direction) => {
            carousel.scrollLeft += direction === 'left' ? -firstCardWidth : firstCardWidth;
        };

        arrowBtns.forEach(btn => {
            btn.addEventListener('click', () => handleArrowClick(btn.id));
        });

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add('dragging');
            startX = e.pageX || e.touches[0].pageX;
            startScrollLeft = carousel.scrollLeft;
        };

        const dragging = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX || e.touches[0].pageX;
            const walk = (x - startX) * 2; //scroll-fast
            carousel.scrollLeft = startScrollLeft - walk;
        };

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove('dragging');
        };

        const infiniteScroll = () => {
            if (carousel.scrollLeft === 0) {
                carousel.classList.add('no-transition');
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove('no-transition');
            } else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add('no-transition');
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove('no-transition');
            }
        };

        carousel.addEventListener('mousedown', dragStart);
        carousel.addEventListener('touchstart', dragStart);
        carousel.addEventListener('mousemove', dragging);
        carousel.addEventListener('touchmove', dragging);
        document.addEventListener('mouseup', dragStop);
        document.addEventListener('touchend', dragStop);
        carousel.addEventListener('scroll', infiniteScroll);

        return () => {
            carousel.removeEventListener('mousedown', dragStart);
            carousel.removeEventListener('touchstart', dragStart);
            carousel.removeEventListener('mousemove', dragging);
            carousel.removeEventListener('touchmove', dragging);
            document.removeEventListener('mouseup', dragStop);
            document.removeEventListener('touchend', dragStop);
            carousel.removeEventListener('scroll', infiniteScroll);
        };
    }, []);

    return (
        <div className='feature-page'>
            <div className='wrapper'>
                <RiArrowLeftWideLine className='arrow-icon' id='left' />
                <ul className='carousel'>
                    <li className='card'>

                        <h3>LFP Battery</h3>
                        <span>Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries,
                            renowned for their safety features—eliminating the risk of fire associated with other
                            Lithium batteries. These batteries boast a broader temperature range, ideal for the
                            diverse Indian climate. Our technology enhances Rhyno's longevity, complemented
                            by an Active Balancing Smart Battery Management System (BMS) for extended life
                            and reduced maintenance. Each battery undergoes rigorous waterproofing tests
                            according to IP76 standards. But it doesn't stop there—our technology goes the extra
                            mile in ensuring the battery's lasting durability. Connect with us to discover the
                            thoughtful engineering behind our batteries!</span>
                    </li>
                    <li className='card'>

                        <h3>Wider Tyres</h3>
                        <span>Now, say goodbye to skidding and embrace the leaning turns!
                            Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous
                            beast that ensures stability on different terrains such as wet roads, mud, and sand </span>
                    </li>
                    <li className='card'>

                        <h3>Range Prediction</h3>
                        <span>Many budget-friendly electric scooters overlook this crucial
                            feature, causing riders to experience range anxiety. With Rhyno, you can ride with
                            peace of mind, thanks to the scooter providing precise information about the
                            remaining battery.</span>
                    </li>
                    <li className='card'>

                        <h3>Extraordinary Experience</h3>
                        <span>Rhyno is more than just a mode of transportation. It is
                            an experience of sheer comfort and style! A seamless fusion of minimalism,
                            sophistication, and a touch of masculinity!</span>
                    </li>
                    <li className='card'>

                        <h3>Rugged and Simple design</h3>
                        <span>We’ve had enough of the EVs looking and feeling like
                            fragile plastic toys. Often fading out and shamelessly breaking in minor accidents,
                            ending up spending weeks and months at service stations for complex repairs. We
                            took a bold step of making something raw, rugged, and practical. We kept it so
                            simple that even your trusted local mechanic can understand and repair most of it. If
                            you have reached this far, why not to take a test ride? Click here to locate your
                            nearest dealership or book a test ride at your home!</span>
                    </li>
                </ul>
                <RiArrowRightWideLine className='arrow-icon' id='right' />
            </div>
        </div>
    );
}

export default Feature;
