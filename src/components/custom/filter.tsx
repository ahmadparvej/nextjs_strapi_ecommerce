"use client"
import { fetchDataFromAPI } from '@/utils/api';
import React, { useEffect, useState } from 'react';
import FilteringOptions from './filteringOptions';
import { useProductStore } from '@/lib/store/store';

export default function Filter() {
  const [categories, setCategories] = useState([])
  const updateProducts = useProductStore((state:any)=>state.updateProducts)

  useEffect(() => {
    let getData = async ()=>{
      let res = await fetchDataFromAPI("/categories");
      setCategories(res?.data)
    }
    getData()
  }, [])

  const handleCategoryChange = async (category:any) => {
    const endPoint = category == "*"? "/products?populate=*" : `/products?populate=*&[filters][category][slug][$eq]=${category}`; 
    let res = await fetchDataFromAPI(endPoint)
    updateProducts(res);
  };

  const handleRatingChange = (rating:any) => {
    console.log(rating);
    // Implement your filtering logic by rating here
    // Update the 'products' state accordingly
  };

  return (
    <div className="p-3">
      <FilteringOptions
        categories={categories}
        handleCategoryChange={handleCategoryChange}
        handleRatingChange={handleRatingChange}
      />
    </div>
  );
};
