
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container w-[90vw] mx-auto flex flex-col md:flex-row justify-evenly items-center">
                <p className="text-center md:text-left">This is the footer</p>
                <p className="text-center md:text-right  md:mt-0">© 2022 Your Company</p>
                <div className="flex flex-col md:flex-row gap-5">
                    <a href="#" className="">About</a>
                    <a href="#" className="">Contact</a>
                    <a href="#" className="">Terms of Service</a>
                    <a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
