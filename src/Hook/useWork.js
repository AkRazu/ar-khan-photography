import React, { useEffect, useState } from "react";

const useWork = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/works")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);
  return [works, setWorks];
};

export default useWork;
