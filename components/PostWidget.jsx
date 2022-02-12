import React, { useState, useEffect } from 'react';

import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '../services';
export const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((res) => setRelatedPosts(res));
    } else {
      getRecentPosts().then((res) => setRelatedPosts(res));
    }
  }, [slug]);

  return (
    <div className="mb-8 rounded-md bg-white p-8 shadow-lg ">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post) => (
        <div key={post.title} className="mb-4 flex w-full items-center">
          <div className="w-16 flex-none">
            <img
              className=" h-16 w-16 rounded-full object-cover align-middle"
              alt={post.title}
              src={post.featuredImage.url}
              alt=""
            />
          </div>
          <div className="ml-4 flex-grow">
            <p className="text-xs text-gray-500">
              {moment(post.createdAt).format('DD MMM, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`}>{post.title}</Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default PostWidget;
