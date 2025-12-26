import logo from "../../../assets/logo.png";
import {
    FaFacebook,
    FaTwitter,
    FaYoutube,
    FaInstagram
} from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import {
    IoIosMail,
    IoIosCall,
    IoIosArrowForward
} from "react-icons/io";
import { footerData } from "../../../data";

const iconMap = {
    ImGithub,
    FaTwitter,
    FaFacebook,
    FaInstagram,
    FaYoutube,
    IoIosMail,
    IoIosCall,
    IoIosArrowForward
};

const Footer = () => {
    return (
        <footer className="bg-[#0f0f0f] text-gray-400 pt-14 pb-6 px-4 lg:px-20">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">

                {/* Logo & Social */}
                <div className="flex flex-col items-center lg:items-start gap-6">
                    <img src={logo} alt="Logo" className="w-24 rounded-md" />

                    <p className="text-sm text-center lg:text-left leading-relaxed">
                        A peaceful homestay offering comfort, elegance and a
                        memorable stay experience.
                    </p>

                    <div className="flex gap-4 text-lg">
                        {footerData.socialLinks.map(({ icon, link }, index) => {
                            const IconComponent = iconMap[icon];
                            return (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1a1a1a]
                                    hover:bg-white hover:text-black transition-all duration-300"
                                >
                                    <IconComponent />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-5 border-b border-gray-700 pb-2">
                        Locate Us
                    </h3>

                    <div className="flex flex-col gap-4 text-sm">
                        {footerData.contactInfo.map(({ icon, text }, index) => {
                            const IconComponent = iconMap[icon];
                            return (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 hover:text-white transition cursor-pointer"
                                >
                                    <span className="text-xl text-gray-300">
                                        <IconComponent />
                                    </span>
                                    <span>{text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Map */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-5 border-b border-gray-700 pb-2">
                        Find Us
                    </h3>

                    <div className="rounded-lg overflow-hidden border border-gray-700">
                        <iframe
                            src={footerData.mapSrc}
                            loading="lazy"
                            className="w-full h-44"
                        />
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 pt-6 border-t border-gray-800 text-center text-sm text-gray-500">
                © {new Date().getFullYear()}{" "}
                <span className="text-white font-medium">
                    The Zaid & Nida House (Homestay)
                </span>
                . All rights reserved.
                <br className="sm:hidden" />
                Designed by{" "}
                <a
                    href="https://ratebotai.com/"
                    className="hover:text-white transition"
                    target="_blank"
                >
                    Ratebotai
                </a>
            </div>
        </footer>
    );
};

export default Footer;
