import React, { useState } from "react";
import useService from "../../Hook/useService";
import AllService from "../AllService/AllService";
const Services = () => {
  const [services, setServices] = useService();
  const [seeAll, setSeeAll] = useState(false);
  const handelSeeAll = ()=>{
    setSeeAll(true)
    if(seeAll===true){
        setSeeAll(false)
    }
  }
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div >
        {seeAll ? (
          <span className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((event) => (
              <AllService key={event._id} service={event} />
            ))}
          </span>
        ) : (
          <span className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0,3).map((event) => (
              <AllService key={event._id} service={event} />
            ))}
          </span>
        )}
      </div>
      <div className="flex justify-center my-10">
        <button onClick={handelSeeAll} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-8 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          See all
        </button>
      </div>
    </div>
  );
};

export default Services;
