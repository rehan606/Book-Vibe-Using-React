import { useEffect, useState } from "react";
import Book from "./Book";


const Books = () => {


    const [books, setBooks] = useState([])

    //Load Data From JSON API
    useEffect(()=> {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data=> setBooks(data))
    },[])

    return (
        <div className="mt-20">
            <h1 className="text-4xl font-bold text-center">Books</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {
                    books.map(book =>  <Book key={book.bookId} book={book}></Book> )
                }
            </div>
        </div>
    );
};

export default Books;