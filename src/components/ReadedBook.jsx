import React from 'react';

const ReadedBook = ({book}) => {

    const { bookId, image, category, tags, bookName, publisher, yearOfPublishing, author, review, totalPages, rating } = book

    return (
        <div className='flex lg:flex-row gap-4 border rounded-xl p-5 mb-6'>
            <div className='w-1/5 bg-gray-100 rounded-xl flex justify-center items-center'>
                <img src={image} alt="" className='rounded-md w-[100px] h-[150px]'/>
            </div>

            <div className='w-4/5 space-y-4'>
                <h2 className='text-3xl font-semibold'>{bookName}</h2>
                <p className='text-md font-semibold'>By: {author} </p>
                <div className="flex gap-5">

                    {
                        tags.map((tag, index) => <div key={index} className="badge bg-green-200 text-green-900">{tag}</div>)
                    }
                    <p> <i className="fa-solid fa-location-dot"></i> Year of Publishing : {yearOfPublishing}</p>
                </div>

                
                <div className='flex gap-6'>
                    <span><i className="fa-solid fa-users"></i> Publisher : {publisher}</span>
                    <span><i className="fa-solid fa-file-lines"></i> Page: {totalPages}</span>
                </div>
                
                <hr />
                <div className='flex gap-4'>
                    <span className='bg-blue-300 text-blue-600 font-semibold px-7 py-2 rounded-full'>Category : {category}</span>
                    <span className='bg-orange-300 text-orange-600 font-semibold px-7 py-2 rounded-full'>Rating: {rating}</span>
                    <span className='bg-green-300 text-green-600 font-semibold px-7 py-2 rounded-full cursor-pointer'>View Details</span>
                </div>
                
            </div>
        </div>
    );
};

export default ReadedBook;