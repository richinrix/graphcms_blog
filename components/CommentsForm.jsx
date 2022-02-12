import React, { useState, useEffect, useRef } from 'react';
import { submitComment } from '../services';
const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    comment: null,
    storeData: null,
  });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initialFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData:
        window.localStorage.getItem('name') ||
        window.localStorage.getItem('email'),
    };
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handleCommentSubmission = (e) => {
    e.preventDefault();
    setError(false);
    const { name, email, comment } = formData;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }

    const commentObj = { name, email, comment, slug };
    console.log({ commentObj });
    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name');
      window.localStorage.removeItem('email');
    }
    submitComment(commentObj).then((res) => {
      if (res.createComment) {
        if (!storeData) {
          formData.name = '';
          formData.email = '';
        }
        formData.comment = '';
        setFormData((prevState) => ({
          ...prevState,
          ...formData,
        }));
        setShowSuccessMessage(true);
        setTimeout(() => {
          setShowSuccessMessage(false);
        }, 3000);
      }
    });
  };
  return (
    <div className="mb-8 rounded-lg p-9 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">Comment</h3>
      <div className="mb-4 grid grid-cols-1 gap-4 ">
        <textarea
          value={formData.comment}
          onChange={onInputChange}
          className="w-full rounded-lg bg-gray-100 p-4 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Write your comment here..."
          name="comment"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
        <input
          type="text"
          value={formData.name}
          onChange={onInputChange}
          className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Name"
          name="name"
        />
        <input
          type="text"
          value={formData.email}
          onChange={onInputChange}
          className="w-full rounded-lg bg-gray-100 px-4 py-2 text-gray-700 outline-none focus:ring-2 focus:ring-gray-200"
          placeholder="Email"
          name="email"
        />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-4 ">
        <div>
          <input
            type="checkbox"
            id="storeData"
            name="storeData"
            value={formData.comment}
            onChange={onInputChange}
          />
          <label
            htmlFor="storeData"
            className="ml-1 cursor-pointer text-gray-500 "
          >
            Save my details for next time I comment
          </label>
        </div>
      </div>
      {error && (
        <div className="text-sm text-red-500">*All Fields are required</div>
      )}
      <div className="mt-8 w-full">
        <button
          className="   w-full cursor-pointer rounded-md bg-pink-600 px-8 py-2  text-white transition duration-500 ease-in hover:bg-indigo-800 lg:max-w-max"
          type="button"
          onClick={handleCommentSubmission}
        >
          Post Comment
        </button>
        {showSuccessMessage && (
          <span className="float-right mt-3 text-xl font-semibold text-green-500">
            Comment Submitted
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
