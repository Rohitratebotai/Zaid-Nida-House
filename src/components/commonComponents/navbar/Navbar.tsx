import { Link, useNavigate } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useEffect, useState } from 'react';
import './navbar.css';
import { IoIosMail, IoIosCall } from 'react-icons/io';
import { navbarData, propertyData } from '../../../data';

const Navbar = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVillasDropdownOpen, setIsVillasDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsVillasDropdownOpen(false);
    };

    const handleNavigate = (property: any) => {
        navigate(`/property_details/${property.id}`, { state: { property } });
        closeMenu()
    };

    const bookingURL = '#';

    useEffect(() => {
        const onLoadfunction = () => {
            const navbar = document.getElementById('navbar_container');
            const navlinks = document.getElementById('navlinks');
            // const bookingBtn = document.getElementById('bookingBtn');

            if (navbar && navlinks) {
                if (window.scrollY > 20) {
                    navbar.classList.add('bg-black', 'border-b-1', 'border-bg-primary');
                    navbar.classList.remove('bg-white', 'border-transparent');
                    navlinks.classList.add('text-white');
                    navlinks.classList.remove('text-black');
                    // bookingBtn.classList.add('bg-white', 'text-black');
                    // bookingBtn.classList.remove('bg-primary', 'text-white');
                } else {
                    navbar.classList.add('bg-white', 'border-transparent');
                    navbar.classList.remove('bg-black', 'border-b-1', 'border-bg-primary');
                    navlinks.classList.add('text-black');
                    navlinks.classList.remove('text-white');
                    // bookingBtn.classList.add('bg-primary', 'text-white');
                    // bookingBtn.classList.remove('bg-white', 'text-black');
                }
            }
        };

        window.addEventListener('scroll', onLoadfunction);
        onLoadfunction();

        return () => {
            window.removeEventListener('scroll', onLoadfunction);
        };
    }, []);

    return (
        <section className='navbar-container w-full h-fit fixed top-0 z-50'>
            {/* Email and Phone */}
            <div className="flex justify-center items-center gap-6 bg-Bg_secondary px-4 py-3 text-gray-700">
                <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                    <IoIosMail className="text-lg md:text-xl text-gray-600" />
                    <a
                        href="mailto:alanghospitality@gmail.com"
                        className="hover:text-black transition-colors duration-300"
                    >
                        alanghospitality@gmail.com
                    </a>
                </div>

                <span className="hidden sm:block text-gray-400">|</span>

                <div className="flex items-center gap-2 text-sm md:text-base font-medium">
                    <IoIosCall className="text-lg md:text-xl text-gray-600" />
                    <a
                        href="tel:9137793318"
                        className="hover:text-black transition-colors duration-300"
                    >
                        9137793318
                    </a>
                </div>
            </div>

            {/* Main Nav */}
            <div id='navbar_container' className='bg-white transition-all duration-300 border-transparent w-full h-full flex items-center justify-between px-4 py-3 md:px-12'>
                {/* Menu Toggle Button (for mobile) */}
                <button className='md:hidden text-primary text-2xl' onClick={toggleMenu}>
                    {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
                {/* Logo */}
                <Link to='/'>
                    <img className='w-16 h-16 rounded-full' src={navbarData.logo[0].image} alt='Logo' />
                </Link>
                {/* Nav Links (Desktop) */}
                <div id='navlinks' className='hidden md:flex items-center gap-4 text-black md:gap-8'>
                    <ul className='flex items-center gap-4 md:gap-8'>
                        {navbarData?.navmenu?.map((item) => (
                            <li key={item.id} className='relative'>
                                {item.title === 'Villas' ? (
                                    <div className='relative group flex flex-col items-start gap-2'>
                                        <Link
                                            onClick={closeMenu}
                                            to={item.link}
                                            className='hover:text-primary after-effect text-sm md:text-xl font-bold cursor-pointer'
                                        >
                                            {item.title}
                                        </Link>
                                        <div className='absolute top-full left-0 hidden group-hover:block bg-white border shadow-md rounded-md min-w-[200px] z-10 transition-all duration-300'>
                                            <ul className='py-2'>
                                                {propertyData.map((property, index) => (
                                                    <li key={index} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                                                        <div onClick={() => handleNavigate(property)} className='block text-black'>
                                                            {property.property_name}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ) : (
                                    <Link onClick={closeMenu} to={item.link} className='hover:text-primary text-sm md:text-xl font-bold cursor-pointer'>
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                    <button
                        id='bookingBtn'
                        onClick={() => window.open(bookingURL, '_blank')}
                        className='bg-primary text-white px-4 py-2 rounded font-semibold hover:bg-opacity-90 transition text-sm md:text-base'
                    >
                        Book Now
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className='md:hidden bg-Bg_secondary w-full absolute top-36 left-0 z-50'>
                    <ul className='flex flex-col items-start gap-4 p-4'>
                        {navbarData?.navmenu?.map((item) => (
                            <li key={item.id} className='w-full'>
                                {item.title === 'Villas' ? (
                                    <>
                                        <div
                                            className='after-effect text-sm md:text-xl font-bold cursor-pointer flex justify-between items-center w-full p-2'
                                            onClick={() => setIsVillasDropdownOpen(!isVillasDropdownOpen)}
                                        >
                                            {item.title} <span>{isVillasDropdownOpen ? '▲' : '▼'}</span>
                                        </div>
                                        {isVillasDropdownOpen && (
                                            <ul className='pl-4 bg-white shadow-md rounded-md'>
                                                {propertyData.map((property, index) => (
                                                    <li key={index} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                                                        <div onClick={() => handleNavigate(property)} className='block text-black'>
                                                            {property.property_name}
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    <Link onClick={closeMenu} to={item.link} className='after-effect text-sm md:text-xl font-bold cursor-pointer p-2 block'>
                                        {item.title}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {/*Book Now Button for Mobile Only*/}
            <button
                onClick={() => {
                    window.open(bookingURL, '_blank');
                    closeMenu();
                }}
                className='fixed bottom-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition md:hidden z-[999] animate-bounce'
            >
                Book Now
            </button>
        </section>
    );
};

export default Navbar;
