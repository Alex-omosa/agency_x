import gsap from 'gsap';
import React, { useEffect } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Banner from './components/Banner';
import Cases from './components/Cases';
import IntroOverlay from './components/IntroOverlay';
function App() {
  useEffect(() => {
    /**
     * Capture width of the inner window
     * and set the value of 1vh to 1% of the inner window
     */
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    /**
     * PREVENT FLASHINGcdcd
     *set hml&body to visibility none
     * and only set it to visible after the app has loaded to prevent
     * flashing in the intro animation
     */
    gsap.to('body', { css: { visibility: 'visible' } });

    const tl = gsap.timeline();
    tl.from(
      '.line span',
      1.8,
      {
        opacity: 0,
        ease: 'power4.out',
        y: 100,
        delay: 1,
        skewY: 7,
        stagger: {
          amount: 0.3,
        },
      },
      '+=1.8'
    )
      .to('.overlay-top', 1.6, {
        height: 0,
        ease: 'expo.inOut',
        stagger: 0.4,
      })
      .to('.overlay-bottom', 1.6, {
        width: 0,
        ease: 'expo.inOut',
        delay: -0.8,
        stagger: {
          amount: 0.4,
        },
      })
      .to('.intro-overlay', 0, { css: { display: 'none' } })
      .from('.case-image img', 1.6, {
        scale: 1.4,
        ease: 'expo.inOut',
        delay: -2,
        stagger: {
          amount: 0.4,
        },
      });
  }, []);
  // We listen to the resize event
  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });

  return (
    <div>
      <IntroOverlay />
      <Header />
      <Banner />
      <Cases />
    </div>
  );
}

export default App;
