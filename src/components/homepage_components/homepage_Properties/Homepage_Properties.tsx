import { FaBed, FaShower, FaSwimmingPool, FaCar } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

// import img1 from '../../../assets/HomePage_banner1.jpg'
// import img2 from '../../../assets/HomePage_banner1.jpg'
// import img3 from '../../../assets/HomePage_banner1.jpg'
import Heading from "../../commonComponents/heading/Heading";
import { useNavigate } from "react-router-dom";
import { propertyData } from "../../../data";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import PropertyModal from "../propertymodal/PropertyModal";
import { useState } from "react";

const Homepage_Properties = () => {
    const navigate = useNavigate();

    const [selectedProperty, setSelectedProperty] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to render the correct icon based on the string identifier
    const renderIcon = (iconName: string) => {
        switch (iconName) {
            case 'bed':
                return <FaBed />;
            case 'shower':
                return <FaShower />;
            case 'pool':
                return <FaSwimmingPool />;
            case 'car':
                return <FaCar />;
            default:
                return null;
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProperty(null);
    };

    const handleNavigate = (id: any) => {
        navigate(`/property_details/${id}`)
    }

    const handleModal = (property: any) => () => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    }


    return (
        <>
            <section className="px-4 lg:px-20 py-8 pb-10 md:pb-20">
                <Heading title='Explore Our Villas' />
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 p-4'>
                    {propertyData.map((property: any) => (
                        <div
                            key={property.id}
                            className="bg-white shadow-lg hover:shadow-2xl rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1"
                        >
                            {/* Image Container */}
                            <div className="relative h-[40vh] md:h-[55vh] group">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                                    spaceBetween={0}
                                    navigation={{
                                        nextEl: '.swiper-button-next',
                                        prevEl: '.swiper-button-prev'
                                    }}
                                    loop={true}
                                    className="h-full w-full cursor-pointer"
                                >
                                    {/* Custom navigation buttons */}
                                    <div className="swiper-button-prev !w-10 !h-10 !bg-white/80 hover:!bg-white !rounded-full !text-gray-800 after:!text-base !shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"></div>
                                    <div className="swiper-button-next !w-10 !h-10 !bg-white/80 hover:!bg-white !rounded-full !text-gray-800 after:!text-base !shadow-md transition-all duration-200 opacity-0 group-hover:opacity-100"></div>

                                    {property?.property_img.map((image: any, index: number) => (
                                        <SwiperSlide key={index}>
                                            <div
                                                onClick={() => handleNavigate(property.id)}
                                                className="h-full w-full relative overflow-hidden"
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${property.property_name} - Image ${index + 1}`}
                                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                                />
                                                {/* Gradient overlay for better text visibility */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Modal view button */}
                                <button
                                    onClick={handleModal(property)}
                                    className="absolute right-3 bottom-3 z-10 text-white h-10 w-10 bg-black/50 hover:bg-black/70 backdrop-blur-sm flex justify-center items-center rounded-lg transition-all duration-200 hover:scale-110"
                                    aria-label="Open in new window"
                                >
                                    <RxOpenInNewWindow className="text-xl" />
                                </button>
                            </div>

                            {/* Content Container */}
                            <div className="p-5 sm:p-6 flex flex-col gap-4">
                                {/* Property Name */}
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors cursor-pointer">
                                    {property.property_name}
                                </h2>

                                {/* Amenities */}
                                <div className="flex flex-wrap items-center gap-x-5 gap-y-3 py-2 border-y border-gray-100">
                                    {property?.property_amenities.slice(0, 3).map((amenity: any, index: number) => (
                                        <div key={index} className="flex items-center gap-2">
                                            <span className="text-xl sm:text-2xl text-blue-600">
                                                {renderIcon(amenity.amenities_icon)}
                                            </span>
                                            <span className="text-sm font-medium text-gray-700">
                                                {amenity.amenities_count
                                                    ? `${amenity.amenities_count}`
                                                    : `${amenity.amenities_availablity}`
                                                }
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-2">
                                    <svg
                                        className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <p className="text-sm text-gray-600 line-clamp-2">
                                        {property.property_location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/* Modal */}
            {isModalOpen && (
                <PropertyModal property={selectedProperty} onClose={closeModal} handleNavigate={handleNavigate} />
            )}

        </>
    );
};


export default Homepage_Properties