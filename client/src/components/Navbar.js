import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="navbar mt-0 bg-gray-900 mx-auto text-gray-200 px-20 sm:px-24">
            <div className="navbar-start">
                <a href='/' className="btn btn-ghost normal-case text-xl">AvsF</a>
            </div>

                <div className="navbar-end">
                    <div className="dropdown z-30">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu bg-slate-50 text-black dropdown-content mt-3 p-2 shadow rounded-box">
                            <li className='w-full'><a href='/'>Homepage</a></li>
                            <li><a href='https://forms.gle/EiGtsusf5K1Qqgr37'>Contact Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
