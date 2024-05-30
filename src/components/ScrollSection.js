import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
// import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';

// gsap.registerPlugin(ScrollToPlugin, ScrollSmoother);
gsap.registerPlugin(ScrollToPlugin);

const slides = [
  {
    id: 'slide-1',
    title: 'ONE',
    bgColor: 'grey',
    color: 'gray',
    blocks: ['Block 1-1', 'Block 1-2', 'Block 1-3']
  },
  {
    id: 'slide-2',
    title: 'TWO',
    bgColor: '#45959b',
    color: 'gray',
    blocks: ['Block 2-1', 'Block 2-2', 'Block 2-3']
  },
  {
    id: 'slide-3',
    title: 'THREE',
    bgColor: '#778899',
    color: 'gray',
    blocks: ['Block 3-1', 'Block 3-2', 'Block 3-3']
  },
  {
    id: 'slide-4',
    title: 'FOUR',
    bgColor: '#ffcc00',
    color: 'gray',
    blocks: ['Block 4-1', 'Block 4-2', 'Block 4-3']
  },
  {
    id: 'slide-5',
    title: 'Fife',
    bgColor: '#413257',
    color: 'gray',
    blocks: ['Block 5-1', 'Block 5-2', 'Block 5-3']
  },
  {
    id: 'slide-6',
    title: 'Fife',
    bgColor: '#456871',
    color: 'gray',
    blocks: ['Block 6-1', 'Block 6-2', 'Block 6-3']
  },
  {
    id: 'slide-7',
    title: 'THE END',
    bgColor: '#776699',
    color: 'gray',
    blocks: ['Block 7-1', 'Block 7-2', 'Block 7-3']
  },
];

function ScrollSection() {
  const containerRef = useRef();
  const slideRefs = useRef(new Array(slides.length).fill(null));
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Check if the viewport width is at least 992 pixels
  const isLargeScreen = () => window.innerWidth >= 992;

  // create the scrollSmoother before your scrollTriggers
  // ScrollSmoother.create({
  //   smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  //   effects: true, // looks for data-speed and data-lag attributes on elements
  //   smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  // });

  // Reset visibility of all blocks except the current slide
  const resetBlockVisibility = () => {
    slideRefs.current.forEach((slide, idx) => {
      if (idx !== currentSlide) {
        const blocks = slide.querySelectorAll('.block');
        gsap.set(blocks, { autoAlpha: 0 });
      }
    });
  };

  // Animate blocks in the current slide
  // const animateSlideBlocks = (index) => {
  //   const blocks = slideRefs.current[index].querySelectorAll('.block');
  //   // Animations based on the slide index
  //   blocks.forEach((block, idx) => {
  //     gsap.to(block, { autoAlpha: 1, duration: 1, delay: idx * 0.2 });
  //   });
  // };

  const animateSlideBlocks = (index) => {
    if (!isLargeScreen()) return;  // Skip animations if the screen is smaller than 992 pixels

    const blocks = slideRefs.current[index].querySelectorAll('.block');
    gsap.set(blocks, { autoAlpha: 0 });  // Reset opacity before animating

    // Slide 2 animations
    if (index === 1) {
        // First block appears from the top
        gsap.fromTo(blocks[0], { y: -500, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.5 });
        // Second and third blocks appear from the right
        gsap.fromTo(blocks[1], { x: 100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1.5 });
        gsap.fromTo(blocks[2], { x: 100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 2 });
    } 
    // Slide 3 animations
    else if (index === 2) {
        // First block appears from the left
        gsap.fromTo(blocks[0], { x: -100, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1.25 });
        // Second block appears from the bottom
        gsap.fromTo(blocks[1], { y: 100, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.5 });
        // Third block width grows from 0 to 100%
        gsap.fromTo(blocks[2], { width: '0%', autoAlpha: 0 }, { width: '100%', autoAlpha: 1, duration: 2.5 });
    }
    else if (index === 3) {
      // First block appears from the top
      gsap.fromTo(blocks[0], { y: -500, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.5 });
      // Second and third blocks appear from the right
      gsap.fromTo(blocks[1], { y: 500, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.5 });
      gsap.fromTo(blocks[2], { y: -500, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.5 });
    }  
    else if (index === 4) {
      // First block appears from the left
      gsap.fromTo(blocks[0], { width: '0%', autoAlpha: 0 }, { width: '100%', autoAlpha: 1, duration: 2.75 });
      // Second block appears from the left
      gsap.fromTo(blocks[1], { x: -300, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 1.75 });
      // Third block width grows from 0 to 100%
      gsap.fromTo(blocks[2], { x: -500, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 2 });
    } else if (index === 5) {
      // First block appears from the top
      gsap.fromTo(blocks[0], { y: 500, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.5 });
      // Second and third blocks appear from the right
      gsap.fromTo(blocks[1], { y: -500, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.5 });
      gsap.fromTo(blocks[2], { y: 500, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.5 });
    }  
    // Default animation for other slides
    else {
      blocks.forEach((block, idx) => {
        gsap.to(block, { autoAlpha: 1, duration: 3, delay: idx * 0.2 });
      });
    }
};  

  // Go to a specific slide
  const goToSlide = (index) => {
    if (index < 0 || index >= slides.length || index === currentSlide || isAnimating) return;
    setIsAnimating(true);

    gsap.to(window, {
      scrollTo: { y: index * window.innerHeight },
      duration: 1,
      onComplete: () => {
        setCurrentSlide(index);
        resetBlockVisibility();  // Reset visibility when slide transition completes
        animateSlideBlocks(index);
        setIsAnimating(false);
      }
    });
  };

  const goToNextSlide = () => {
    goToSlide(currentSlide + 1);
  };

  const goToPrevSlide = () => {
    goToSlide(currentSlide - 1);
  };

  useEffect(() => {
    const handleWheel = (event) => {
      if (isAnimating) return;
      const deltaY = event.deltaY;
      if (deltaY > 0 && currentSlide < slides.length - 1) {
        goToSlide(currentSlide + 1);
      } else if (deltaY < 0 && currentSlide > 0) {
        goToSlide(currentSlide - 1);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide, isAnimating]);

  // useEffect(() => {
  //   resetBlockVisibility();  // Ensure all blocks are initially hidden except the first
  //   animateSlideBlocks(0);   // Animate blocks on the first slide initially
  // }, []);

  // useEffect(() => {
  //   slideRefs.current = slideRefs.current.slice(0, slides.length);
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
  //         const index = slideRefs.current.indexOf(entry.target);
  //         goToSlide(index);
  //       }
  //     });
  //   }, { threshold: 0.5 });

  //   slideRefs.current.forEach(slide => {
  //     if (slide) observer.observe(slide);
  //   });

  //   return () => observer.disconnect();
  // }, []);

  useEffect(() => {
    // Animate blocks on the first slide right after the component mounts if on a large screen
    if (isLargeScreen()) {
      animateSlideBlocks(0);
    }
}, []);

  useEffect(() => {
    const handleWheel = (event) => {
        if (isAnimating) return;
        const deltaY = event.deltaY;
        if (deltaY > 0 && currentSlide < slides.length - 1) {
            goToNextSlide();
        } else if (deltaY < 0 && currentSlide > 0) {
            goToPrevSlide();
        }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSlide, isAnimating]);

  useEffect(() => {
    slideRefs.current = slideRefs.current.slice(0, slides.length);
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                const index = slideRefs.current.indexOf(entry.target);
                goToSlide(index);
            }
        });
    }, { threshold: 0.5 });

    slideRefs.current.forEach(slide => {
        if (slide) observer.observe(slide);
    });

    return () => observer.disconnect();
  }, []);


  return (
    <div className="slides-container" ref={containerRef} style={{ position: 'relative', width: '100%', height: `${slides.length * 100}vh`, overflow: 'hidden' }}>
      {slides.map((slide, index) => (
        <div key={slide.id} ref={el => slideRefs.current[index] = el} className="slide" style={{ position: 'absolute', width: '100%', height: '100vh', backgroundColor: slide.bgColor, color: slide.color || 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', top: `${index * 100}vh` }}>
          {slide.blocks.map((block, idx) => (
            <div key={idx} className="block" style={{ margin: '10px', padding: '20px', background: 'rgba(255, 255, 255, 1)', borderRadius: '10px', opacity: 0 }}>
              <h2>{block}</h2>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ScrollSection;