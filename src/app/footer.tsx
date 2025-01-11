
"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <section className="bg-black py-6 rou rounded-lg">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12">

          <h2 className="text-white text-xl lg:text-4xl font-extrabold text-center lg:text-left mb-6 lg:mb-0">
            STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>

          <div className="flex flex-col space-y-4 w-full lg:w-auto">

            <div className="relative">
              <input
                type="email"

                placeholder="  ✉️  Enter your email address"
                className="w-full lg:w-96 px-4 py-3 rounded-full text-sm border-0 focus:ring-2 focus:ring-gray-300"
              />

            </div>

            <button className="w-full lg:w-96 bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </section>


      <section className="container max-w-7xl mx-auto py-8 px-5">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-4xl font-extrabold ">SHOP.CO</h3>
            <p className="text-sm text-gray-700 mt-2">
              We have clothes that suit your style and which you&apos;re proud to wear. From women to men.
            </p>
            <div className="flex  space-x-4 mt-4 text-blue-500">
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <Image src="/images/twitter.png" alt="Twitter" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <Image src="/images/facebook.png" alt="Facebook" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <Image src="/images/insta.png" alt="Instagram" width={20} height={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-800">
                <Image src="/images/github.png" alt="GitHub" width={20} height={20} />
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

            <Image src="/images/visa.png" alt="Visa" width={40} height={40} className="w-10" />
            <Image src="/images/paypal.png" alt="PayPal" width={40} height={40} className="w-10" />
            <Image src="/images/master.png" alt="MasterCard" width={40} height={40} className="w-10" />
            <Image src="/images/apple.png" alt="Apple Pay" width={40} height={40} className="w-10" />
            <Image src="/images/google pay.png" alt="Google Pay" width={40} height={40} className="w-10" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
