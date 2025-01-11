import Footer from "@/app/footer"
import Image from 'next/image';

const CartPage = () => {

    const cartItems = [
        {
            id: 1,
            name: "Gradient Graphic T-shirt",
            size: "Large",
            color: "White",
            price: 145,
            image: "/images/graphicshirt.png",
        },
        {
            id: 2,
            name: "Checkered Shirt",
            size: "Medium",
            color: "Red",
            price: 180,
            image: "/images/shirt.png",
        },
        {
            id: 3,
            name: "Skinny Fit Jeans",
            size: "Large",
            color: "Blue",
            price: 240,
            image: "/images/jeans.png",
        },
    ];

    const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
    const discount = 0.2 * subtotal;
    const deliveryFee = 15;
    const total = subtotal - discount + deliveryFee;

    return (
        <>
            <section className="container mx-auto px-4 py-10">

                <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="col-span-2 bg-white border rounded-lg shadow p-4">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between border-b border-gray-200 pb-4 mb-4"
                            >
                                <div className="flex items-center">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={80}
                                        height={80}
                                        className="rounded-lg object-cover mr-4"
                                    />
                                    <div>
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        <p className="text-sm text-gray-600">
                                            Size: {item.size} | Color: {item.color}
                                        </p>
                                        <p className="text-lg font-bold mt-1">${item.price}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center space-y-2">
                                    <button className="text-red-500">
                                        <Image
                                            src="/images/trash.png"
                                            alt="Remove Item"
                                            width={20}
                                            height={20}
                                            className=""
                                        />
                                    </button>
                                    <div className="flex items-center space-x-2">
                                        <button className="w-8 h-8 rounded-full border text-gray-600">
                                            -
                                        </button>
                                        <span>1</span>
                                        <button className="w-8 h-8 rounded-full border text-gray-600">
                                            +
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>


                    <div className="bg-white border rounded-lg shadow p-4">
                        <h2 className="text-lg font-bold mb-4">Order Summary</h2>
                        <div className="flex justify-between text-sm mb-2">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                            <span>Discount (-20%)</span>
                            <span className="text-red-500">-${discount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm mb-2">
                            <span>Delivery Fee</span>
                            <span>${deliveryFee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-2">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Add promo code"
                                className="border w-full py-2 px-3 rounded-lg mb-2"
                            />
                            <button className="bg-black text-white w-full py-2 rounded hover:bg-gray-800">
                                Apply
                            </button>
                        </div>
                        <button className="bg-black text-white w-full py-3 rounded mt-4 hover:bg-gray-800 flex items-center justify-center">
                            Go to Checkout <i className="fas fa-arrow-right ml-2"></i>
                        </button>
                    </div>
                </div>

            </section>
            <Footer />


        </>
    );
};

export default CartPage;
