import img1 from "../../../assets/baga_bunglow(JPG)/img_6.jpg";
import img2 from "../../../assets/zaid_and_nida(JPG)/img_19.jpg";
import { MdOutlineDone } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface FeatureData {
    images: string[];
    title: string;
    description: string;
    features: string[];
}

const Homepage_WhyChoose = () => {
    const featureData: FeatureData = {
        images: [img1, img2],
        title: "Why Choose Zaid & Nida House (Homestay)?",
        description:
            "Experience luxury and tranquility at Zaid & Nida House (Homestay), a perfect retreat for relaxation, celebration, or adventure by the serene Mandwa Beach.",
        features: [
            "Scenic beachside stays near Mandwa Beach",
            "Elegant villas for a luxurious escape",
            "Savor delicious coastal and local cuisine",
            "Perfect for relaxation and adventure seekers",
            "Personalized experiences for every traveler",
            "Unwind, celebrate, and make lasting memories"
        ]
    };

    return (
        <section className="py-14 lg:py-24 bg-white">
            <div className="max-w-screen-2xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 px-6 sm:px-10 lg:px-20">

                {/* Images */}
                {/* Images */}
                <div className="flex-1 flex justify-center items-center relative">
                    <img
                        src={featureData.images[0]}
                        alt="Luxury stay view"
                        className="
            w-full sm:w-[90%] 
            aspect-[16/10] 
            object-cover 
            rounded-2xl 
            shadow-xl
        "
                    />

                    <img
                        src={featureData.images[1]}
                        alt="Outdoor relaxation area"
                        className="
            w-48 sm:w-64 
            absolute 
            -bottom-10 
            right-6 sm:right-12 
            rounded-2xl 
            shadow-2xl 
            object-cover 
            border-4 border-white
        "
                    />
                </div>


                {/* Content */}
                <div className="flex-1">
                    <h2 className="text-sm uppercase tracking-[0.25em] text-primary mb-3">
                        Why Choose Us
                    </h2>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold text-gray-900 mb-5 leading-snug">
                        {featureData.title}
                    </h1>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                        {featureData.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                        {featureData.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="text-primary text-xl mt-1">
                                    <MdOutlineDone />
                                </span>
                                <span className="text-gray-700 text-sm sm:text-base leading-relaxed">
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-primary text-white px-7 py-3 rounded-full font-medium tracking-wide
                        hover:bg-primary-dark transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Contact Us
                        <FaArrowRightLong />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Homepage_WhyChoose;
