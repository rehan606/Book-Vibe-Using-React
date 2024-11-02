import { NavLink } from "react-router-dom";


const NavBar = () => {

    // Dynamic List item 
    const links = <>
        <li> <NavLink to="/" >Home</NavLink> </li>
        <li> <NavLink to="/listedBooks">Listed Book</NavLink> </li>
        <li> <NavLink to="/dashBoard">DashBoard</NavLink> </li>
        <li> <NavLink to="/pageRead">Page to Read</NavLink> </li>
    </>

    return (
        <div className="navbar bg-base-100 container mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {/* Dynamic List items */}
                        {links}
                    </ul>
                </div>
                <a className="text-lg md:text-xl cursor-pointer font-semibold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {/* Dynamic List items */}
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-4 ">
                <a className="px-3 lg:px-8 py-4 rounded-xl cursor-pointer text-black bg-green-400">Sign in</a>
                <a className="px-3 lg:px-8 py-4 rounded-xl cursor-pointer text-black bg-blue-400">Sign Up</a>
            </div>
        </div>
    );
};

export default NavBar;