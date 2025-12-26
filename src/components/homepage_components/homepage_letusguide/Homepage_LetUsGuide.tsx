import { Link } from "react-router-dom";

const Homepage_LetUsGuide = () => {
    return (
        <section className="bg-Bg_secondary py-14 lg:py-24 px-4">
            <div className="max-w-screen-xl mx-auto">
                <div
                    className="
                        flex flex-col lg:flex-row 
                        justify-between items-center 
                        gap-12 
                        rounded-3xl
                        sm:rounded-full 
                        bg-black 
                        px-8 sm:px-12 lg:px-16 
                        py-14 lg:py-20 
                        text-Bg_Primary 
                        shadow-xl
                    "
                >
                    {/* Left */}
                    <div className="flex-1 space-y-4 text-center lg:text-left">
                        <p className="text-sm uppercase tracking-[0.35em] text-primary">
                            Your Perfect Getaway
                        </p>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-semibold leading-tight">
                            Explore Your Dream Escape
                        </h2>

                        <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-gray-300 max-w-xl">
                            Let us design a vacation you’ll truly cherish.
                        </h3>
                    </div>

                    {/* Right */}
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-xl">
                            Discover the charm of Alibaug, a coastal paradise known for its pristine beaches,
                            lush greenery, and luxurious private villas — crafted for unforgettable stays.
                        </p>

                        <Link
                            to="/contact"
                            className="
                                inline-flex items-center justify-center 
                                px-8 py-4 
                                rounded-full 
                                bg-primary 
                                text-base sm:text-lg 
                                font-medium 
                                tracking-wide 
                                hover:bg-primary-dark 
                                transition-all duration-300 
                                shadow-md hover:shadow-lg
                            "
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Homepage_LetUsGuide;
