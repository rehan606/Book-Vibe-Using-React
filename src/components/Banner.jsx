import bannerImage from '../assets/books.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannerImage}
                        className="max-w-sm rounded-lg shadow-2xl" 
                    />

                    <div className='w-2/4'>
                        <h1 className="text-5xl font-bold">Book to Freshen up your Book self</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut 
                        </p>
                        <button className="px-8 py-4 rounded-xl cursor-pointer text-black bg-green-400">View The List</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;