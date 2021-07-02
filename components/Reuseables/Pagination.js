import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="flex flex-col items-center my-12">
    <div className="flex text-gray-700">
        <div className="flex h-12 font-medium rounded-full">
        {pageNumbers.map((number) => (
              <a
                key={number}
                onClick={() => paginate(number)}
                className='w-8 flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in  border border-gray'
              >
                {number}
              </a>
            ))}
        </div>
    </div>
</div>
  );
};


export default Pagination;