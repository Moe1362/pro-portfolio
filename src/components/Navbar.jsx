import { useState } from "react";
import { LINKS } from "../constants/index.js";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50">
            <div className="flex w-full justify-between items-center max-w-6xl mx-auto
                md:my-2 bg-stone-950/30 p-4 md:rounded-xl backdrop-blur-lg transition-all duration-300">
                
                {/* Brand Name */}
                <div className="text-white font-semibold text-4xl uppercase transition-colors hover:text-yellow-400">
                    <a href="/">Mohammad Abbasi</a>
                </div>
                
                {/* Desktop Links */}
                <div className="hidden md:flex space-x-8 text-xl">
                    {LINKS.map((link, index) => (
                        <a 
                            href={link.href} 
                            key={index} 
                            className="text-white  hover:text-yellow-400 text-2xl transition duration-300"
                            style={{
                                textShadow: "0px 0px 6px rgba(255, 215, 0, 0.6)",
                            }}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        className={`text-white focus:outline-none transition-transform duration-500 ${menuOpen ? "rotate-180" : ""}`}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        {menuOpen ? (
                            <RiCloseFill className="w-8 h-8" />
                        ) : ( 
                            <RiMenu3Fill className="w-8 h-8" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Links with Slide-Down Animation */}
            {menuOpen && (
                <div 
                    className="md:hidden p-2 bg-stone-950/30 backdrop-blur-lg rounded-xl flex flex-col space-y-4 max-w-6xl mx-auto"
                    style={{
                        animation: "slideDown 0.5s ease forwards",
                    }}
                >
                    {LINKS.map((link, index) => (
                        <a 
                            href={link.href} 
                            key={index} 
                            className="text-white text-xl hover:text-yellow-400 transition duration-300"
                            style={{
                                textShadow: "0px 0px 6px rgba(255, 215, 0, 0.6)",
                            }}
                            onClick={handleLinkClick}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}

export default Navbar;
