import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../utility/AddToDB';
import Book from './Book';
import ReadedBook from './ReadedBook';

const ListedBooks = () => {
    const [redList, setReadList] = useState([])

    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const sroredReadListStr = storedReadList.map(id => parseInt(id));
        const readBookList = allBooks.filter(book => sroredReadListStr.includes(book.bookId))

        setReadList(readBookList)

    },[])


    return (
        <div>
            <div className="bg-green-300 px-6 py-4 text-center mt-10">
                <h2 className='text-green-900'>Books</h2>
            </div>

            <div className='mt-10 mb-20'>
                <Tabs>
                    <TabList>
                        <Tab>Read List</Tab>
                        <Tab>Wish List</Tab>
                    </TabList>

                    <TabPanel>
                        <h2 className='text-2xl font-semibold mb-7 mt-7'>Books I Read : {redList.length} </h2>

                        <div className='mb-6'>
                            {
                                // redList.map(book => <Book key={book.bookId} book={book}></Book> )
                                redList.map(book => <ReadedBook key={book.bookId} book={book}></ReadedBook> )
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2 className='text-2xl font-semibold'>My Wish List</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;