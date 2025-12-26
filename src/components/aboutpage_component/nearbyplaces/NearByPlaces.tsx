import img1 from "../../../assets/about_images/alibaug_beach.jpeg";
import img2 from "../../../assets/about_images/mandwa_beach.jpeg";
import img3 from "../../../assets/about_images/murud_ganjria.jpeg";
import img4 from "../../../assets/about_images/revdanda-beach-fort.jpg";

interface Room {
    title: string;
    thumbnail: string;
}

const NearByPlaces = () => {
    const data: Room[] = [
        { title: "Alibaug Beach", thumbnail: img1 },
        { title: "Mandwa Beach", thumbnail: img2 },
        { title: "Murud-Janjira Fort", thumbnail: img3 },
        { title: "Revdanda Fort", thumbnail: img4 }
    ];

    return (
        <section className="py-14 lg:py-24 bg-[#fafafa]">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-14">

                {/* Title */}
                <div className="text-center mb-14">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-900">
                        Nearby Attractions
                    </h2>
                    <p className="mt-3 text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
                        Explore beautiful beaches and historic landmarks just minutes away from your stay.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((item) => (
                        <div
                            key={item.title}
                            className="
                                bg-white 
                                rounded-xl 
                                overflow-hidden 
                                shadow-sm 
                                hover:shadow-lg 
                                transition-all duration-300
                            "
                        >
                            {/* Image */}
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="h-56 sm:h-72 w-full object-cover"
                            />

                            {/* Content */}
                            <div className="p-5 text-center">
                                <h3 className="text-lg font-medium text-gray-900 capitalize">
                                    {item.title}
                                </h3>

                                <span className="block mx-auto mt-3 h-[2px] w-8 bg-primary rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NearByPlaces;
