import React from 'react'
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer flex justify-between items-center bg-gradient-to-r from-slate-800 to-slate-950 text-sm sm:text-base text-white p-4">
            <div className="footer-content flex flex-col">
                <p>&copy; {new Date().getFullYear()} Razvan Balan</p>
                <ul className="footer-links flex space-x-4 mt-2">
                    <li><Link to="#">About</Link></li>
                    <li><Link to="#">Contact</Link></li>
                </ul>
            </div>
            <div className="footer-button flex">
                <Link to={'/partys/create'}>
                    <FaPlus className='text-5xl text-blue-400' />
                </Link>
            </div>
        </footer>
    );
};


export default Footer