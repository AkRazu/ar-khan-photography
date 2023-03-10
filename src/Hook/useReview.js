import React, { useEffect, useState } from 'react';

const useReview = () => {
    const [review,setReview]= useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res=>res.json())
        .then(data=>setReview(data))
    },[review])
    return [review,setReview];
};

export default useReview;