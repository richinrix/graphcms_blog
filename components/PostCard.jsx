import React from 'react';
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className="my-3 mb-8 rounded-lg p-0 pb-12  shadow-lg lg:mb-4 lg:p-8">
      <div className="shadown-md relative mb-6 overflow-hidden pb-80">
        <img
          src={post.featuredImage && post.featuredImage.url}
          alt="Featured image"
          className="absolute h-80 w-full  rounded-t-lg bg-gray-900 object-cover object-center  shadow-lg lg:rounded-lg"
        />
      </div>
      <h1 className="trasition cursor-pointer text-center text-3xl  font-semibold duration-100 hover:text-blue-600 lg:mb-8 lg:text-left ">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="mt-2 flex items-center  justify-between px-5  text-center  lg:mt-0 lg:flex lg:px-0">
        <div className="mb-4 flex  items-center justify-center lg:mb-0 lg:w-auto ">
          <img
            src={post.author.photo && post.author.photo.url}
            alt="Author"
            className="mr-2 h-7 w-7 rounded-full bg-pink-400  align-middle lg:h-8 lg:w-8"
          />
          <p className="text-md ml-1 inline align-middle text-gray-700 lg:text-lg">
            {post.author.name}
          </p>
        </div>
        <div className="flex items-center justify-center font-medium text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 inline h-3 w-3 text-pink-500 lg:h-6 lg:w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className=" lg:text-md text-xs ">
            {moment(post.createdAt).format('DD MMM, YYYY')}
          </span>
        </div>
      </div>
      <p className="my-4 px-3 text-justify text-sm font-normal text-gray-700 lg:px-2 lg:text-lg">
        {post.excerpt}
      </p>
      <div className="  cursor-pointer text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transofrm text-md inline-block rounded-md bg-blue-900 py-3 px-4 font-medium text-white transition duration-500 hover:-translate-y-1 lg:px-8 lg:text-lg">
            Continue reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
