import React from "react";

const reviews = [
    {
        name: "Samantha D.",
        date: "August 14, 2023",
        review:
            "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.",
        stars: 5,
    },
    {
        name: "Alex M.",
        date: "August 15, 2023",
        review:
            "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
        stars: 5,
    },
    {
        name: "Ethan R.",
        date: "August 16, 2023",
        review:
            "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.",
        stars: 4,
    },
    {
        name: "Olivia P.",
        date: "August 17, 2023",
        review:
            "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out.",
        stars: 5,
    },
    {
        name: "Liam K.",
        date: "August 18, 2023",
        review:
            "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer’s skill. It’s like wearing a piece of art that reflects my passion for both design and fashion.",
        stars: 4,
    },
    {
        name: "Ava H.",
        date: "August 19, 2023",
        review:
            "I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
        stars: 4,
    },

    
];

const ReviewsSection = () => {
    return (
        <section className="container mx-auto max-w-7xl py-10 px-5">
            
            <div className="flex justify-between items-center mb-6 border-b pb-4">
                <h2 className="text-2xl font-bold">All Reviews ({reviews.length})</h2>
                <div className="flex items-center space-x-4">
             
                    <div className="flex items-center text-sm text-gray-600">
                        <span className="mr-2">Sort by:</span>
                        <select className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none">
                            <option>Latest</option>
                            <option>Highest Rated</option>
                        </select>
                    </div>

                   
                    <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                        Write a Review
                    </button>
                </div>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="border rounded-lg p-6 shadow-sm hover:shadow-lg transition duration-300"
                    >
                        
                        <div className="flex items-center mb-3">
                            <div className="text-yellow-500 text-lg">
                                {"★".repeat(review.stars)}
                                {"☆".repeat(5 - review.stars)}
                            </div>
                        </div>

                   
                        <h3 className="font-bold text-lg mb-1 flex items-center">
                            {review.name}{" "}
                            <span className="ml-1 text-green-500">
                             
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-4.707a1 1 0 011.414 0l5-5a1 1 0 00-1.414-1.414L9 11.586l-2.293-2.293a1 1 0 10-1.414 1.414l3 3z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </h3>

                  
                        <p className="text-sm text-gray-500 mb-3">Posted on {review.date}</p>

                 
                        <p className="text-gray-700">{review.review}</p>
                    </div>
                ))}
            </div>

           
            <div className="text-center mt-8">
                <button className="bg-gray-100 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-200 transition">
                    Load More Reviews
                </button>
            </div>

            
        </section>
    );
};

export default ReviewsSection;
