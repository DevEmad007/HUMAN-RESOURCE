import React,{ useState,useEffect,useRef } from 'react';
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

    useEffect(() => {
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

    const animate = () => {
        return '-translate-x-' + index;
    };

    return (
        <div className='lg:grid lg:grid-cols-80/20 lg:px-10'>
            <div className={`m-4  overflow-hidden lg:pl-12`}>
                <div
                    ref={elementRef}
                    style={{ transform: `Translate(${-103 * index}%)` }}
                    className={`flex gap-3 duration-700 `}>
                    <BannerItem index={'0'} />
                    <BannerItem index={'1'} />
                    <BannerItem index={'2'} />
                    <BannerItem index={'3'} />
                    <BannerItem index={'4'} />
                </div>
            </div>
        </div>
    );
};

export default Banner;