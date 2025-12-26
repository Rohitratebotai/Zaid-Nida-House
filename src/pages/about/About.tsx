import CommonBanner from "../../components/commonComponents/banner/CommonBanner"
// import img from '../../assets/HomePage_banner1.jpg'
import img1 from '../../assets/parallax_img.jpg'
import Parallax from "../../components/commonComponents/parallax/Parallax"
import NearByPlaces from "../../components/aboutpage_component/nearbyplaces/NearByPlaces"

const About = () => {
    return (
        <section>
            <div>
                <CommonBanner image={img1} />
            </div>
            <div className=" tracking-wide py-20 px-8 lg:px-32 flex flex-col gap-8 text-justify">
                {/* title  */}
                <div>
                    <span className="text-4xl font-medium">
                        Welcome to Zaid & Nida House (Homestay) - Your Serene Beachside Retreat in Alibaug!
                    </span>
                </div>
                {/* description  */}
                <div className="text-base font-thin flex flex-col gap-6 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-8 max-w-7xl mx-auto">
                    <p className="text-lg sm:text-xl font-semibold text-gray-900 text-center md:text-left">
                        Experience Tranquility at Zaid & Nida House (Homestay), Your Beachside Escape!
                    </p>

                    <p className="text-gray-700 text-justify">
                        Nestled along the scenic <strong>Mandwa Beach Road</strong> in Alibaug, <strong>Zaid & Nida House (Homestay) </strong> offers an exclusive retreat where serenity meets luxury. Surrounded by pristine beaches and lush greenery, our property is the perfect getaway for those seeking relaxation, adventure, and breathtaking ocean views.
                    </p>

                    <p className="text-gray-700 text-justify">
                        Wake up to the soothing sound of waves, unwind in our elegant accommodations, and experience warm hospitality like never before. Whether you're taking a peaceful stroll along <strong>Mandwa Beach</strong>, indulging in thrilling water activities, or simply soaking in the coastal charm, <strong>Zaid & Nida House (Homestay)</strong> promises an unforgettable stay.
                    </p>

                    <p className="font-medium text-gray-800 text-center md:text-left mt-6">
                        Book your stay at <strong>Zaid & Nida House (Homestay)</strong> today and immerse yourself in the perfect blend of comfort, adventure, and seaside serenity in Alibaug!
                    </p>
                </div>

            </div>
            {/* Parallax  */}
            <div>
                <Parallax image={img1} title={'Discover Unmatched Elegance in Our Exclusive Property'} description = {'Imagine escaping the daily hustle to a serene retreat where the ocean breeze soothes your soul. At Zaid & Nida House (Homestay), we bring you a slice of paradise. Located along Mandwa Beach Road in Alibag, just a short stroll from the shore, experience unmatched luxury, comfort, and breathtaking coastal beauty.'}
 />
            </div>
            {/* Near by places  */}
            <div>
                <NearByPlaces />
            </div>
        </section>
    )
}

export default About