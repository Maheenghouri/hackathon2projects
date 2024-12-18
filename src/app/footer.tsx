
"use client";

const Footer = () => {
    return (
        <footer className="bg-gray-100">

            <div className="bg-black text-white py-8 rounded-lg">
                <div className="container max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-5">

                    <h2 className="text-xl md:text-3xl font-extrabold mb-4 md:mb-0">
                        STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
                    </h2>


                    <div className="flex items-center w-full md:w-auto space-x-2">
                        <div className="relative flex-grow">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="px-4 py-3 rounded-l-lg w-full text-black placeholder-gray-500"

                            />

                            <div className="absolute inset-y-0 left-3 flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-500"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >

                                    <path d="M2.94 6.94a2 2 0 012.83 0L10 11.17l4.23-4.23a2 2 0 112.83 2.83l-5.65 5.65a2 2 0 01-2.83 0L2.94 9.77a2 2 0 010-2.83z" />
                                </svg>

                            </div>
                        </div>

                        <button className="bg-yellow-400  text-black font-bold px-6 py-3 rounded-r-lg hover:bg-yellow-500">
                            Subscribe to Newsletter
                        </button>
                    </div>
                </div>
            </div>


            <div className="container max-w-7xl mx-auto py-8 px-5">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              
                    <div>
                        <h3 className="text-lg font-bold">SHOP.CO</h3>
                        <p className="text-sm text-gray-700 mt-2">
                            We have clothes that suit your style and which you&apos;re proud to
                            wear. From women to men.
                        </p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-600 hover:text-black">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-black">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-black">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-600 hover:text-black">
                                <i className="fab fa-pinterest-p"></i>
                            </a>
                        </div>
                    </div>

               
                    <div>
                        <h4 className="text-lg font-bold mb-2">COMPANY</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li><a href="#" className="hover:underline">About</a></li>
                            <li><a href="#" className="hover:underline">Features</a></li>
                            <li><a href="#" className="hover:underline">Works</a></li>
                            <li><a href="#" className="hover:underline">Career</a></li>
                        </ul>
                    </div>

                 
                    <div>
                        <h4 className="text-lg font-bold mb-2">HELP</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li><a href="#" className="hover:underline">Customer Support</a></li>
                            <li><a href="#" className="hover:underline">Delivery Details</a></li>
                            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>

                 
                    <div>
                        <h4 className="text-lg font-bold mb-2">FAQ</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li><a href="#" className="hover:underline">Account</a></li>
                            <li><a href="#" className="hover:underline">Manage Deliveries</a></li>
                            <li><a href="#" className="hover:underline">Orders</a></li>
                            <li><a href="#" className="hover:underline">Payments</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-2">RESOURCES</h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li><a href="#" className="hover:underline">Free eBooks</a></li>
                            <li><a href="#" className="hover:underline">Development Tutorial</a></li>
                            <li><a href="#" className="hover:underline">How-to Blog</a></li>
                            <li><a href="#" className="hover:underline">YouTube Playlist</a></li>
                        </ul>
                    </div>
                </div>

               
                <div className="mt-8 border-t pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
                    <p>Shop.co © 2000-2023, All Rights Reserved</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <img
                            src="/images/visa.png"
                            alt="Visa"
                            className="w-10"
                        />
                        <img
                            src="/images/paypal.png"
                            alt="PayPal"
                            className="w-10"
                        />
                        <img
                            src="/images/master.png"
                            alt="MasterCard"
                            className="w-10"
                        />
                        <img
                            src="/images/apple.png"
                            alt="Apple Pay"
                            className="w-10"
                        />
                        <img
                            src="/images/goole pay.png"
                            alt="Google Pay"
                            className="w-10"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
