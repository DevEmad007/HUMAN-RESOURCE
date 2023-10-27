import React from 'react';

const BannerItem = ({ className,index }) => {
    return (
        <div className='min-w-full h-56 bg-red-400 flex justify-center items-center'>
            {index}
        </div>
    );
};

export default BannerItem;