import React, { useEffect, useState } from 'react';
import { getCategories } from '../services';
import Link from 'next/link';

const Nav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold">GraphCMS</span>
          </Link>
        </div>
        <div className="hidden md:float-right md:contents ">
          {categories.map((category, index) => (
            <Link href={`/category/${category.slug}`} key={index}>
              <span className="mt-2 ml-4  cursor-pointer font-semibold uppercase hover:text-blue-500 md:float-right">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nav;
