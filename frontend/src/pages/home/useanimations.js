import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { initAnimations } from '../utils/animations';

export const useAnimations = () => {
    useEffect(() => {
        // Initialize AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });

        // Initialize GSAP animations
        initAnimations();

        // Cleanup
        return () => {
            AOS.refresh();
        };
    }, []);
};