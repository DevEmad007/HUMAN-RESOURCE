import React from 'react';
import ProductCard from '../../Cards/ProductCard';

const Products = () => {
    return (
        <div className='mx-4 grid grid-cols-1 md:gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    );
};

export default Products;