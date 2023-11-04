import React,{ useState,useEffect,useRef,useLayoutEffect } from 'react';
import BannerItem from './BannerItem';

const Banner = () => {
    const [ isVisible,setIsVisible ] = useState(false);
    const elementRef = useRef(null);
    const [ index,setIndex ] = useState(0);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2, // Adjust this value as needed
        };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setIndex(curr => curr + 1);
                    observer.unobserve(elementRef.current);
                }
            });
        },options);
        observer.observe(elementRef.current);
        return () => {
            // Clean up the observer when the component unmounts
            observer.disconnect();
        };
    },[]);


    useLayoutEffect(() => {
        const handleslide = () => {
            if (isVisible) {
                setIndex(curr => {
                    if (curr >= 3) {
                        return 1;
                    } else {
                        return curr + 1;
                    }
                });
            }
        };
        window.setInterval(handleslide,6000);
        return () => {
            window.clearInterval(handleslide);
        };
    },[ isVisible ]);

    return (
        <div className={`overflow-hidden`}>
            <div
                ref={elementRef}
                style={{ transform: `Translate(calc(${-100 * index}% - ${12 * index}px))` }} //12 px depends on next lines gap class
                className={`flex gap-3 duration-700 snap-mandatory `}>
                <BannerItem index={'0'} />
                <BannerItem index={'1'} />
                <BannerItem index={'2'} />
                <BannerItem index={'3'} />
                <BannerItem index={'4'} />
            </div>
        </div>
    );
};

export default Banner;