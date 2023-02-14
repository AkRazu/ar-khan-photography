import React from 'react';
import useService from '../../Hook/useService';
import AllService from '../AllService/AllService';
const Services = () => {
    const [services,setServices] = useService();
    return (
        <div>
            {
                services.map(service=><AllService key={service._id} service={service}></AllService>)
            }
        </div>
    );
};

export default Services;