import { fetchDataFromAPI } from '@/utils/api';
import React from 'react';
import FilteringOptions from './filteringOptions';

export default async function Filter() {
  let categories:[] = []; // Your list of categories

  let res = await getData()

  categories = res?.data

  const handleSort = (sortOption:any) => {
    // Implement your sorting logic here
    // Update the 'products' state accordingly
  };

  const handleCategoryChange = (category:any) => {
    console.log(category);
    // Implement your filtering logic by category here
    // Update the 'products' state accordingly
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

async function getData() {
  const products = await fetchDataFromAPI("/categories");
  return products
}