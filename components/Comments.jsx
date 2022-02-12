import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import { getComments } from '../services';
const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(slug).then((res) => setComments(res));
  }, []);
  return (
    <div>
      {' '}
      {comments.length > 0 && (
        <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
          <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
            {comments.length} Comments
          </h3>
          {comments.map((comment) => (
            <div
              key={comment.createdAt}
              className="border-greay-10 mb-4 border-b pb-4"
            >
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span> on{' '}
                {moment(comment.createdAt).format('DD MMM YYYY')}
              </p>
              <p className="w-full whitespace-pre-line text-gray-600">
                {parse(comment.comment)}
              </p>
            </div>
          ))}
        </div>
      )}{' '}
    </div>
  );
};

export default Comments;
