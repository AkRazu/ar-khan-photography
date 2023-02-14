import React from 'react';
import useService from '../../Hook/useService';
const Services = () => {
    const [services,setServices] = useService();
    console.log(services);
    return (
        <div>
            
        </div>
    );
};

export default Services;