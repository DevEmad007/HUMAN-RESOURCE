import React from 'react';
import EditButton from '../EditButton/EditButton';
import { Edit } from '@mui/icons-material';

const Item = () => {
    return (
        <div className='relative mb-4  text-left grid grid-cols-20/80 bg-white dark:bg-slate-700 rounded-lg '>
            <EditButton className={'absolute top-1 right-2'} >
                <Edit sx={{ fontSize: '20px' }} />
            </EditButton>
            <div>
                <img className='bg-cyan-600 w-full h-full rounded-lg' src="" alt="" />
            </div>
            <div className='px-2 py-1'>
                <h2 className='text-xl  font-semibold tracking-wide'>Lorem, ipsum dolor.</h2>
                <p className='text-md dark:text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                <div className='flex gap-16 items-center pt-1'>
                    <p>Buying Wish 0</p>
                    <p>Star 0 </p>
                </div>
            </div>
        </div>
    );
};

export default Item;