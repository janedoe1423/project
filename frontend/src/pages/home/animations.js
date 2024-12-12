import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollMagic from 'scrollmagic';

gsap.registerPlugin(ScrollTrigger);

export const initAnimations = () => {
    // Hero section animations
    gsap.from('.hero-title', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
        delay: 0.5
    });

    gsap.from('.hero-subtitle', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power4.out',
        delay: 0.8
    });

    // Scroll-based animations
    gsap.utils.toArray('.animate-on-scroll').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        });
    });

    // Parallax effect
    gsap.utils.toArray('.parallax').forEach(element => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                scrub: true,
                start: 'top bottom',
                end: 'bottom top'
            },
            y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
            ease: 'none'
        });
    });
};

// Menu item animations
export const menuItemAnimation = (element) => {
    gsap.from(element, {
        duration: 0.6,
        scale: 0.8,
        opacity: 0,
        ease: 'power2.out'
    });
};

// Smooth scroll function
export const smoothScroll = (target) => {
    gsap.to(window, {
        duration: 1,
        scrollTo: target,
        ease: 'power2.inOut'
    });
};