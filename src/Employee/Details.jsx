import React from "react";
import { useNavigate } from "react-router";
import Navbar from "../Navbar/Navbar";

const Details = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-gray-800'>
      <Navbar />
      <div className='flex items-center justify-center h-screen'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-gray-900'>
          <img
            className='w-full'
            src='https://img.freepik.com/premium-photo/young-cheerful-programmer-with-headphones-looking-you-with-smile-during-work-new-software-office_274679-9896.jpg?w=2000'
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>Steve Harvey</div>
            <p className='text-gray-500 text-base'>
              Steve is working as a web developer and works mainly in front end
              projects with React Framework, He is also Good with React Native.
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #React
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #Native
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #Javascript
            </span>
          </div>
          <button
            type='button'
            onClick={() => {
              navigate("/view");
            }}
            class='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 '
          >
            CONNECTION
          </button>
          <button
            type='button'
            onClick={() => {
              navigate("/form");
            }}
            class='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 '
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
