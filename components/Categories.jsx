import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
export const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);
  return (
    <div className="mb-8 rounded-md bg-white p-8 shadow-lg ">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="mb-3 block cursor-pointer pb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};
export default Categories;
