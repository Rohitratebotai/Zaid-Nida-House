import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import '../../../App.css';
import img1 from '../../../assets/zaid_and_nida(JPG)/img_5.jpg';
import img2 from '../../../assets/zaid_and_nida(JPG)/img_18.jpg';
import img3 from '../../../assets/zaid_and_nida(JPG)/img_9.jpg';
// import Homepage_form from '../homepage_form/Homepage_form';

const Slider = () => {

    const images = [
        { id: 1, src: img1, alt: 'Image 1' },
        { id: 2, src: img2, alt: 'Image 2' },
        { id: 3, src: img3, alt: 'Image 3' },
    ];

    return (
        <section className="relative text-black w-full flex justify-center items-center h-[70vh] sm:h-[90vh]">
            {/* Slider Layer */}
            <div className="absolute inset-0 w-full h-[70vh] sm:h-[90vh] z-10">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                    spaceBetween={10}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop={true}
                >
                    {images.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div className="h-[70vh] sm:h-[90vh] w-full">
                                <img src={image.src} alt={image.alt} className="object-cover w-full h-[70vh] sm:h-[90vh]" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Overlay Layer */}
            <div className="absolute inset-0 w-full h-full z-20 bg-black bg-opacity-30 sm:bg-opacity-40" />

            {/* Text Layer */}
            <div className="absolute inset-0 w-full h-full z-30 flex items-center top-10 justify-center pointer-events-none">
                <div className="px-8 py-6 flex flex-col items-center gap-4 text-center">
                    <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">Welcome to Zaid & Nida</h1>
                    <p className="text-white text-lg md:text-2xl font-medium drop-shadow">Experience comfort, luxury, and unforgettable memories.</p>
                </div>
            </div>
        </section>
    );
};

export default Slider;