import {Link} from 'react-router-dom'
import { useState } from 'react';
const Header = () =>{
    const [toggleNav,setToggleNav]=useState(false);
    return(
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">Logo</span>
    </div>
    <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white text-5xl border-white hover:text-white hover:border-white"  onClick={()=>{setToggleNav(!toggleNav)}}>
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0zm0 6h20v2H0zm0 6h20v2H0z"/>
            </svg>
        </button>
    </div>
    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className={`text-sm ${(!toggleNav) ? `hidden` : `block` } lg:block`}>
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                Home
            </Link>
            <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                About
            </Link>
            <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white">
                Contact
            </Link>
        </div>
    </div>
</nav>
    );
}

export default Header