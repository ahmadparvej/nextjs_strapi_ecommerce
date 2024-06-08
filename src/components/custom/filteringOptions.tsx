import { Category } from '@/types/category';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface FilteringOptionsProps {
  categories: Category[];
  handleCategoryChange: (category: string) => void;
  handleRatingChange: (rating: number) => void;
}

const FilteringOptions: React.FC<FilteringOptionsProps> = ({
  categories,
  handleCategoryChange,
  handleRatingChange,
}) => {
  return (
    <div className="flex gap-3 items-center">
      <div className="flex gap-3 items-center">
        <label htmlFor="category">Category:</label>
        <Select onValueChange={(e)=>handleCategoryChange(e)}>
          <SelectTrigger className="w-[90px]">
            <SelectValue placeholder="All"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="*">All</SelectItem>
            {categories.map((category: Category, index) => (
              <SelectItem key={index} value={category.attributes.name}>{category.attributes.name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-3 items-center">
        <label htmlFor="rating" className="ml-4">
          Rating:
        </label>
        <Select>
          <SelectTrigger className="w-[90px]">
            <SelectValue placeholder="Any"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">Any</SelectItem>
            <SelectItem value="1">1 star</SelectItem>
            <SelectItem value="2">2 stars</SelectItem>
            <SelectItem value="3">3 stars</SelectItem>
            <SelectItem value="4">4 stars</SelectItem>
            <SelectItem value="5">5 stars</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default FilteringOptions;
