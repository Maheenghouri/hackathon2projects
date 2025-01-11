import Link from 'next/link';
import Image from "next/image";

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
                    <Link href="/" className="hover:text-gray-600">
                        Home
                    </Link>
                    <Link href="/productPage" className="hover:text-gray-600">
                        Product
                    </Link>
                    <Link href="/categorypage" className="hover:text-gray-600">
                        Category
                    </Link>
                    <Link href="/cartpage" className="hover:text-gray-600">
                        Cart
                    </Link>
                </nav>


                <div className="flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 w-1/3">
                <Image
                        src="/images/search.png"
                        alt="Search"
                        width={16}
                        height={16}
                        className="text-gray-400"
                    />
                    <input
                    
                        type="text"
                        placeholder="Search for products..."
                        className="flex-grow bg-transparent outline-none text-sm"
                    />
                    
                </div>


                <div className="flex items-center space-x-4">
                    <Link href="/cart">
                        <Image
                            src="/images/cart.png"
                            alt="Cart"
                            width={24}
                            height={24}
                            className="hover:opacity-80"
                        />
                    </Link>
                    <Link href="/account">
                        <Image
                            src="/images/account.png"
                            alt="Account"
                            width={24}
                            height={24}
                            className="hover:opacity-80"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
}
