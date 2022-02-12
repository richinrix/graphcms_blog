import React from 'react';
import Image from 'next/image';
const Author = ({ author }) => {
  return (
    <div className=" relative mt-20 mb-10  items-center rounded-lg border-2 border-black bg-opacity-70 p-12 text-center   ">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          height={100}
          width={100}
          src={author.photo.url}
          alt={author.name}
          className=" rounded-full align-middle "
        />
      </div>
      <h3 className="my-2 text-xl font-bold ">{author.name}</h3>
      <p className="text-lg ">{author.bio}</p>
    </div>
  );
};

export default Author;
