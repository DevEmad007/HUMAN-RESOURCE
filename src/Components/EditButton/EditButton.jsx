import React from 'react';
import { Link } from 'react-router-dom';

const EditButton = ({ className,children }) => {
    return (
        <button className={className}>
            <Link>
                {children}
            </Link>
        </button>
    );
};

export default EditButton;