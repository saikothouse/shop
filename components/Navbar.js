import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/">
                    <span className="text-lg font-bold cursor-pointer">My E-Commerce Site</span>
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/products">
                            <span className={`text-lg ${router.pathname === '/products' ? 'font-bold' : ''}`}>
                                Products
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cart">
                            <span className={`text-lg ${router.pathname === '/cart' ? 'font-bold' : ''}`}>
                                Cart
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span className={`text-lg ${router.pathname === '/about' ? 'font-bold' : ''}`}>
                                About
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span className={`text-lg ${router.pathname === '/contact' ? 'font-bold' : ''}`}>
                                Contact
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className="flex items-center space-x-4">
                    <Link href="/login">
                        <span className="text-lg hover:underline cursor-pointer">Login</span>
                    </Link>
                    <Link href="/signup">
                        <span className="text-lg hover:underline cursor-pointer">Sign Up</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
