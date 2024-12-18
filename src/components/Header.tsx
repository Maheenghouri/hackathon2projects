import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-black text-white">

            <div className="text-center py-2 text-sm bg-black">
                <span>Sign up and get 20% off your first order. </span>
                <Link href="/signup" className="underline">
                    Sign Up Now
                </Link>
            </div>


            <div className="flex items-center justify-between px-7 py-7 bg-white text-black">

                <div className="text-2xl font-bold">
                    <Link href="/">SHOP.CO</Link>
                </div>


                <nav className="flex space-x-6">
                    <Link href="/shop" className="hover:text-gray-600">
                        Shop
                    </Link>
                    <Link href="/onsale" className="hover:text-gray-600">
                        On Sale
                    </Link>
                    <Link href="/newarrivals" className="hover:text-gray-600">
                        New Arrivals
                    </Link>
                    <Link href="/brands" className="hover:text-gray-600">
                        Brands
                    </Link>
                </nav>


                <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 w-1/3">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="flex-grow bg-transparent outline-none text-sm"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>


                <div className="flex items-center space-x-4">
                    <Link href="/cart">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l1 5m10-5l-1 5m-10 0h10"
                            />
                        </svg>
                    </Link>
                    <Link href="/account">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5.121 17.804A4 4 0 0112 15m0 0a4 4 0 016.879 2.804M12 15v5m0-5a4 4 0 01-6.879 2.804M12 5a3 3 0 100 6 3 3 0 000-6z"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
}
