import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Service = () => {
    const {name}= useLoaderData();
    console.log(name);
    return (
        <div>
            
        </div>
    );
};

export default Service;