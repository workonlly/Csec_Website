import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-6 px-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
                <div className="mb-2 md:mb-0">
                    <h1 className="text-2xl font-bold">CSEC</h1>
                    <p className="text-sm">© 2024 CSEC. All rights reserved.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://www.facebook.com/csec.nith" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        Facebook
                    </a>
                    <a href="mailto:csec@nith.ac.in" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        Gmail
                    </a>
                    <a href="https://www.linkedin.com/company/nith-csec/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/csec_nith" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        Instagram
                    </a>
                </div>
            </div>
            
        </footer>
    );
}
export default Footer;