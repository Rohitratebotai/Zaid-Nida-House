import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards } from 'swiper/modules';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { FaQuoteLeft } from "react-icons/fa";
import Heading from '../../commonComponents/heading/Heading';

interface Review {
    review: string,
    clientName: string,
    rating?: number
}

const Homepage_Testimonial = () => {
    const data: Review[] = [
        {
            review: "The Only stay hotel has a great vibe and the privacy of staying in a hotel room with a king-sized bed.",
            clientName: 'Suman Nath',
            rating: 5
        },
        {
            review: "Only stay is the perfect hotel for people who are traveling for the first time and want to stay somewhere that is affordable and comfortable.",
            clientName: 'Suresh Bhat',
            rating: 5
        },
        {
            review: "The Only stay hotel is great for people who are new to the area because it is close to the best restaurants and shopping.",
            clientName: 'Lalita Goel',
            rating: 4
        },
        {
            review: "Nice experience with good service by Only hotel, specially thanks to Mr. Shubhash Varma.",
            clientName: 'Sawak Tarapurwala',
            rating: 5
        },
        {
            review: "It was an overall good experience with great taste and ambience!! Our server was Vinod Kumar and was very friendly and soft spoken!",
            clientName: 'Heena Dabherao',
            rating: 4
        }
    ];

    const renderStars = (rating: number = 5) => {
        return (
            <div className="flex gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                    <svg
                        key={i}
                        className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                ))}
            </div>
        )
    };

    return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <span className="block text-center mb-12">
                    <Heading title="Hear What Our Happy Guests Are Saying" />
                </span>

                <div className="relative w-full">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCards]}
                        spaceBetween={24}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet bg-primary w-2 h-2 inline-block rounded-full mx-1 opacity-60 cursor-pointer transition-opacity',
                            bulletActiveClass: 'swiper-pagination-bullet-active opacity-100',
                        }}
                        navigation={{
                            nextEl: '.NextElement',
                            prevEl: '.PrevElement'
                        }}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 24
                            }
                        }}
                        className="testimonial-swiper pb-12"
                    >
                        {data?.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="h-auto min-h-64 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary">
                                    <div className="p-6 h-full flex flex-col">
                                        <div className="mb-4">
                                            <FaQuoteLeft className="text-primary text-3xl opacity-50" />
                                        </div>
                                        <p className="text-gray-700 flex-grow mb-4">{item.review}</p>
                                        <div className="mt-auto">
                                            {renderStars(item.rating)}
                                            <p className="font-medium text-gray-900 mt-3">{item.clientName}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className="absolute top-1/2 left-0 right-0 z-20 flex justify-between items-center px-2 transform -translate-y-1/2">
                        <button className="PrevElement flex justify-center items-center bg-white shadow-md hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer h-10 w-10 md:h-12 md:w-12 rounded-full text-gray-800 border border-gray-200">
                            <GrFormPrevious className="text-xl md:text-2xl" />
                        </button>
                        <button className="NextElement flex justify-center items-center bg-white shadow-md hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer h-10 w-10 md:h-12 md:w-12 rounded-full text-gray-800 border border-gray-200">
                            <MdOutlineNavigateNext className="text-xl md:text-2xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage_Testimonial;