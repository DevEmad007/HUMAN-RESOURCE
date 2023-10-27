import React,{ useEffect,useRef } from 'react';

const useSkipRender = (callback,dependency) => {
    const skipRender = useRef(true);
    useEffect(() => {
        if (skipRender.current) {
            skipRender.current = false;
            return;
        }
        callback();
    },[ dependency ]);
};

export default useSkipRender;