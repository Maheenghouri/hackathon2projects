"use client";


import Footer from "@/app/footer"
import Review from "@/components/Reviews";
const ProductPage = () => {
   

    return (
        <div className="container mx-auto max-w-7xl py-10 px-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div className="flex ">

                    <div className="flex flex-col space-y-4 mr-4 first">
                        <img
                            src="/images/T-shirt1.png"
                            alt="Thumbnail 1"
                            className="w-20 h-20 rounded-lg border cursor-pointer hover:border-black"
                        />
                        <img
                            src="/images/T-shirt2.png"
                            alt="Thumbnail 2"
                            className="w-20 h-20 rounded-lg border cursor-pointer hover:border-black"
                        />
                        <img
                            src="/images/T-shirt3.png"
                            alt="Thumbnail 3"
                            className="w-20 h-20 rounded-lg border cursor-pointer hover:border-black"
                        />
                    </div>

                    <div>
                        <img
                            src="/images/T-shirt1.png"
                            alt="Main Product"
                            className="w-full h-auto rounded-lg shadow-md main-product"
                        />
                    </div>
                </div>


                <div>
                    <h1 className="text-3xl font-extrabold mb-4">ONE LIFE GRAPHIC T-SHIRT</h1>
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-500 text-lg">
                            {"★".repeat(4)}{"☆"}
                        </div>
                        <span className="ml-2 text-gray-600 text-sm">4.5/5</span>
                    </div>
                    <div className="flex items-center mb-4">
                        <span className="text-2xl font-bold text-black">$260</span>
                        <span className="line-through text-gray-400 ml-4">$300</span>
                        <span className="ml-2 text-red-500 text-sm font-semibold">-40%</span>
                    </div>
                    <p className="text-gray-600 mb-6">
                        This graphic t-shirt is perfect for any occasion. Crafted from a soft
                        and breathable fabric, it offers superior comfort and style.
                    </p>


                    <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">Select Colors</h3>
                        <div className="flex space-x-2">
                            <button
                                className="w-8 h-8 rounded-full border-2 border-gray-300"
                                style={{ backgroundColor: "#6B8E23" }}
                            />
                            <button
                                className="w-8 h-8 rounded-full border-2 border-gray-300"
                                style={{ backgroundColor: "#000080" }}
                            />
                            <button
                                className="w-8 h-8 rounded-full border-2 border-gray-300"
                                style={{ backgroundColor: "#2E8B57" }}
                            />
                        </div>
                    </div>


                    <div className="mb-4">
                        <h3 className="text-sm font-semibold text-gray-800 mb-2">Choose Size</h3>
                        <div className="flex space-x-2">
                            <button className="px-4 py-2 rounded border border-gray-300">
                                Small
                            </button>
                            <button className="px-4 py-2 rounded border border-gray-300">
                                Medium
                            </button>
                            <button className="px-4 py-2 rounded border bg-black text-white">
                                Large
                            </button>
                            <button className="px-4 py-2 rounded border border-gray-300">
                                X-Large
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center border rounded">
                            <button className="px-3 py-2 text-lg">-</button>
                            <span className="px-4 py-2">1</span>
                            <button className="px-3 py-2 text-lg">+</button>
                        </div>
                        <button className="bg-black text-white font-bold px-6 py-3 rounded hover:bg-gray-800">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <section className="container max-w-7xl mx-auto text-center flex flex-col lg:flex-row items-center justify-between bg-white py-12 px-6 lg:px-12 relative">
            <section className="py-10">
                <div className="text-center">
                    <h2 className="text-4xl font-extrabold mb-6">All Reviews</h2>
                </div>
                <Review />
            </section>

            </section>
            <section className="container max-w-7xl mx-auto py-10 px-5">
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block text-center">YOU MIGHT ALSO LIKE</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 ">
                    <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
                        <img
                            src="/images/poloshirt.png"
                            alt="T-shirt with Tape Details"
                            className="w-full h-auto rounded-md mb-4 object-cover image-size"
                        />
                        <h3 className="text-sm font-medium mb-2">Polo with Contrast Trims</h3>
                        <div className="flex items-center mb-2">
                            <span className="text-yellow-400 text-sm">★★★★</span>
                            <span className="text-gray-500 text-xs ml-2">4.0/5</span>
                        </div>
                        <p className="text-lg font-bold">
                            $212 <span className="line-through text-gray-400">$242</span>
                            <span className="bg-red-100 text-red-500 rounded-full px-3 py-1 text-sm font-semibold">-20%</span>
                        </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
                        <img
                            src="/images/graphicshirt.png"
                            alt="Skinny Fit Jeans"
                            className="w-full h-auto rounded-md mb-4 object-cover image-size"
                        />
                        <h3 className="text-sm font-medium mb-2">Gradient Graphic T-shirt</h3>
                        <div className="flex items-center mb-2">
                            <span className="text-yellow-400 text-sm">★★★☆☆</span>
                            <span className="text-gray-500 text-xs ml-2">3.5/5</span>
                        </div>
                        <p className="text-lg font-bold">$145</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
                        <img
                            src="/images/tiping.png"
                            alt="Checkered Shirt"
                            className="w-full h-auto rounded-md mb-4 object-cover image-size"
                        />
                        <h3 className="text-sm font-medium mb-2">Polo with Tipping Details</h3>
                        <div className="flex items-center mb-2">
                            <span className="text-yellow-400 text-sm">★★★★☆</span>
                            <span className="text-gray-500 text-xs ml-2">4.5/5</span>
                        </div>
                        <p className="text-lg font-bold">$180</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
                        <img
                            src="/images/blackstriped.png"
                            alt="Sleeve Striped T-shirt"
                            className="w-full h-auto rounded-md mb-4 object-cover image-size"
                        />
                        <h3 className="text-sm font-medium mb-2">Black Striped T-shirt</h3>
                        <div className="flex items-center mb-2">
                            <span className="text-yellow-400 text-sm">★★★★★</span>
                            <span className="text-gray-500 text-xs ml-2">5.0/5</span>
                        </div>
                        <p className="text-lg font-bold">
                            $120 <span className="line-through text-gray-400">$150</span>
                            <span className="bg-red-100 text-red-500 rounded-full px-3 py-1 text-sm font-semibold">-30%</span>
                        </p>
                    </div>
                </div>


                <div className="text-center mt-8">
                    <button className="px-8 py-3 text-black text-sm font-medium rounded-full transition-colors">
                        View All
                    </button>
                </div>
            </section>

            
            <Footer />
        </div>

    );
};

export default ProductPage;
