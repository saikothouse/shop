import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-4">
            <Link href="/">
                <a className="text-lg font-bold">My E-Commerce Site</a>
            </Link>
            <ul className="flex justify-between items-center">
                <li>
                    <Link href="/products">
                        <a className="text-lg">Products</a>
                    </Link>
                </li>
                <li>
                    <Link href="/cart">
                        <a className="text-lg">Cart</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
