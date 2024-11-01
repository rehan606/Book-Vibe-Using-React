import { Link } from "react-router-dom";


const Book = ({ book }) => {

    const { bookId, image, category, tags, bookName, publisher, yearOfPublishing, author, review, totalPages, rating, } = book

    return (
        <Link Link to={`/books/${bookId}`}>
            <div className=" card bg-base-100  shadow-xl border p-5">
                <figure className=" mb-5 bg-gray-300 rounded-xl">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl py-7  h-[250px]" />
                </figure>
                <div className="flex gap-5">

                    {
                        tags.map((tag, index) => <div key={index} className="badge bg-green-200 text-green-900">{tag}</div>)
                    }
                </div>

                <div className="flex flex-col  gap-4 mt-4">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By : {author}</p>
                    <hr />
                    <div className="flex justify-between">
                        <p>{category}</p>

                        <div>
                            
                            <div className="rating">
                                <p className="mr-5">{rating}  </p>
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" defaultChecked />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        
        </Link>
    );
};

export default Book;