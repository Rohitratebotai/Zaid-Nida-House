import CommonBanner from "../../components/commonComponents/banner/CommonBanner"
import Homepage_Properties from "../../components/homepage_components/homepage_Properties/Homepage_Properties";
import img from '../../assets/baga_bunglow(JPG)/img_6.jpg';

const contactInfo = [
    {
        icon: "📍",
        text: "Zaid & Nida House; Bungalow No.9/A/II; Silver Valley CHS; Khinger Road; Panchgani 412805",
    },
    { icon: "📞", text: "+91-9137793318" },
    { icon: "✉️", text: "alanghospitality@gmail.com" },
];

const ContactUs = () => {
    return (
        <section className=''>
            {/* Banner  */}
            <div>
                <CommonBanner image={img} />
            </div>
            {/* Contact Info Section  */}
            <div className="flex flex-col md:flex-row gap-8 px-4 lg:px-20 py-8">
                {/* Left Section */}
                <div className="md:w-1/2 text-gray-600 text-lg leading-relaxed">
                    <span>
                        Discover the perfect blend of luxury and tranquility at Zaid & Nida House (Homestay), nestled along the scenic Mandwa Beach Road in Alibag. Whether you're looking for a peaceful coastal retreat or an adventure-filled getaway, our exquisite property promises an unforgettable stay.

                        Enjoy premium amenities, including spacious accommodations, breathtaking beachside views, high-speed WiFi, 24/7 security, and personalized services to enhance your experience. Escape to serenity and book your stay at Zaid & Nida House (Homestay) today!
                    </span>

                </div>

                {/* Right Section */}
                <div className="md:w-1/2 text-gray-800 text-lg leading-relaxed space-y-4">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="flex items-start">
                            <span className="text-orange-500 mr-4">{info.icon}</span>
                            <span>{info.text}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Homepage Property section  */}
            <div>
                <Homepage_Properties />
            </div>
        </section>
    )
}

export default ContactUs