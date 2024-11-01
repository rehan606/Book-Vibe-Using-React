import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToWishList } from "../utility/AddToDB";


const BookDetails = () => {
    const {bookId} = useParams();
    const id = parseInt(bookId)
    const data = useLoaderData();
    const book = data.find(book => book.bookId === id)

    const { category, image,  tags, bookName, publisher, yearOfPublishing, author, review, totalPages, rating, } = book

    

    // Add to Read LIst 
    const handleMarkAsRead = (id)=> {
       addToStoredReadList(id);
    }

    // Add to Wish list 
    const handleWishList = (id) => {
        addToWishList(id)
    }



    return (
        <div className="flex flex-col lg:flex-row gap-6 border rounded-xl mt-10 mb-20 p-4">
            <div className="lg:w-1/2 bg-gray-200 rounded-xl flex justify-center items-center">
                <img src={image} alt="" className="h-[500px] rounded-xl shadow-lg"/>
            </div>

            <div className="lg:w-1/2 space-y-3">
                <h2 className="text-3xl font-semibold">{bookName}</h2>
                <p className="font-bold">By: {author} </p>
                <hr />
                <p>{category}</p>
                <hr />
                <p><span  className="font-bold">Review :</span> {review}</p>
                <div className="flex gap-5 items-center">
                    <span className="font-bold">Tag: </span>
                    {
                        tags.map((tag, index) => <div key={index} className="badge bg-green-200 text-green-900">{tag}</div>)
                    }
                </div>
                <hr />
                <div className="flex">
                    <span className="w-1/2">Total Pages :</span>  
                    <p className="font-bold w-1/2">{totalPages}</p>
                </div>

                <div className="flex">
                    <span className="w-1/2" >Publisher : </span> 
                    <p className="font-bold w-1/2">  {publisher}</p>
                </div>

                <div className="flex">
                    <span className="w-1/2">Year Of Publishing :</span>   
                    <p className="font-bold w-1/2"> {yearOfPublishing}</p>
                </div>
                
                <div className="flex mb-7">
                    <span className="w-1/2">Rating :</span>   
                    <p className="font-bold w-1/2"> {rating}</p>
                </div>

                <div className="  ">
                    <a onClick={()=> handleMarkAsRead(bookId)} className="px-8 py-4 rounded-xl cursor-pointer text-green-500 border border-green-400 inline-block mr-4 mt-5">Mark as Read</a>
                    <a onClick={() => handleWishList(bookId)} className="px-8 py-4 rounded-xl cursor-pointer text-black bg-blue-400 inline-block mt-5">Add to Wishlist</a>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;