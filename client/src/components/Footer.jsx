import React from "react";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#0b082b] text-white py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                

                <div className="flex gap-4">
                    <a href="#" className="text-gray-400 hover:text-primary">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary">
                        <Facebook size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-primary">
                        <Linkedin size={20} />
                    </a>
                </div>

                <div className="text-sm text-gray-500 text-center md:text-right">
                    <p>&copy; {new Date().getFullYear()} Made By Ayesh Jamadar. All rights reserved.</p>
                    <div className="flex gap-4 justify-center md:justify-end mt-2">
                        <a href="#" className="hover:text-primary">Privacy</a>
                        <a href="#" className="hover:text-primary">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
