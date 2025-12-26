import img1 from "../../../assets/khatri_bunglow/img_11.jpg";
import img4 from "../../../assets/khatri_bunglow/img_14.jpg";
import img2 from "../../../assets/zaid_and_nida(JPG)/img_12.jpg";
import img3 from "../../../assets/baga_bunglow(JPG)/img_4.jpg";

interface Room {
    title: string;
    thumbnail: string;
    description: string;
}

const ExclusiveService_Card = () => {
    const data: Room[] = [
        {
            title: "Your Paradise Awaits",
            thumbnail: img1,
            description:
                "Escape to a tranquil haven where luxury meets serenity, offering the ultimate retreat from everyday life."
        },
        {
            title: "A Home for Every Heart",
            thumbnail: img2,
            description:
                "Discover a place that feels like home, designed to suit every style, story, and dream."
        },
        {
            title: "Sip, Relax, Repeat",
            thumbnail: img3,
            description:
                "Start your day with the perfect brew, because great coffee fuels great moments."
        },
        {
            title: "Celebrations That Last a Lifetime",
            thumbnail: img4,
            description:
                "Create unforgettable memories with events tailored to make your special day truly extraordinary."
        }
    ];

    return (
        <section className="pb-14">
            <div className="max-w-screen-2xl mx-auto px-4">
                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data.map((item) => (
                        <div
                            key={item.title}
                            className="group relative h-[55vh] md:h-[60vh] rounded-lg overflow-hidden shadow-lg"
                        >
                            {/* Image */}
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-0 w-full px-6 py-6 text-center text-white transition-all duration-500 group-hover:pb-10">
                                {/* Title */}
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-semibold tracking-wide mb-3">
                                    {item.title}
                                </h3>

                                {/* Divider */}
                                <span className="block mx-auto mb-3 h-[2px] w-12 bg-white/70 transition-all duration-300 group-hover:w-20" />

                                {/* Description */}
                                <p className="text-sm md:text-base text-gray-200 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExclusiveService_Card;
