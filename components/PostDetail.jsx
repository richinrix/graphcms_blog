import React from 'react';
import moment from 'moment';
const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }
      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }
      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className="mb-4 text-xl font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case 'heading-four':
        return (
          <h4 key={index} className="text-md mb-4 font-semibold">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className="shadowl-lg mb-8 bg-white pb-12 lg:p-0">
      <div className="relative mb-6 overflow-hidden shadow-md">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="h-full w-full rounded-t-lg object-top"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="mb-4 flex w-full items-center justify-between  lg:mb-8">
          <div className=" flex  items-center justify-center lg:mb-0 lg:w-auto ">
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
        <h1 className="mb-4 text-3xl font-semibold lg:mb-8">{post.title}</h1>
        {post.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemindex) =>
            getContentFragment(itemindex, item.text, item)
          );
          // console.log(children);
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
