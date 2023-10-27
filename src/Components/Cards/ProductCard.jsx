import React from 'react';

const ProductCard = () => {
    return (
        <div className='my-6 min-w-full max-w-2xl grid grid-cols-1 rounded-2xl bg-white'>
            <img className='min-w-full max-w-md bg-blue-300 h-72 rounded-t-2xl ' src="" alt="" />
            <div className='p-3'>
                <h2 className='text-xl font-semibold'>Lorem, ipsum dolor.</h2>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='flex flex-col gap-3 p-3'>
                <button className='py-2 px-5 bg-green-500 rounded-lg'>Wish to Buy</button>
                <button className='py-2 px-5 bg-green-500 rounded-lg'>Give Star</button>
            </div>
        </div >
    );
};

export default ProductCard;