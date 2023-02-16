import React from 'react';
import useWork from '../../Hook/useWork';
import Work from '../Work/Work';

const Works = () => {
    const[works, setWorks]=useWork();
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000">
            <div className='grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4'>
                {
                    works.map(work=><Work key={work._id} work={work}  />)
                }
            </div>
        </div>
    );
};

export default Works;