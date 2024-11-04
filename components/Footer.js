import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <p className="text-lg mb-4 md:mb-0">© 2024 My E-Commerce Site. All rights reserved.</p>
                <div className="flex space-x-4">
                    <Link href="/about" className="hover:underline">About Us</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                    <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
                    <Link href="/terms" className="hover:underline">Terms of Service</Link>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                        <img src="/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        <img src="/icons/twitter.svg" alt="Twitter" className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                        <img src="/icons/instagram.svg" alt="Instagram" className="w-6 h-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
