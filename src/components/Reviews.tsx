import { useState } from "react";

const ReviewsSection = () => {
  const [activeTab, setActiveTab] = useState("Rating & Reviews");
  const reviews = [
    {
      name: "Samantha D.",
      date: "August 14, 2023",
      review:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It’s become my favorite go-to shirt.",
      rating: 4.5,
    },
    {
      name: "Alex M.",
      date: "August 15, 2023",
      review:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I’m quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
      rating: 5,
    },
    {
      name: "Ethan R.",
      date: "August 16, 2023",
      review:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer’s touch in every aspect of this shirt.",
      rating: 4.5,
      highlight: true,
    },
    {
      name: "Olivia P.",
      date: "August 17, 2023",
      review:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It’s evident that the designer poured their creativity into making this t-shirt stand out.",
      rating: 4.5,
    },
    {
      name: "Liam K.",
      date: "August 18, 2023",
      review:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer’s skill. It’s like wearing a piece of art that reflects my passion for both design and fashion.",
      rating: 5,
    },
    {
      name: "Ava H.",
      date: "August 19, 2023",
      review:
        "I’m not just wearing a t-shirt; I’m wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this t-shirt a conversation starter.",
      rating: 5,
    },
  ];

  return (
    <div className="container mx-auto max-w-7xl py-10 px-5">
      {/* Section 1: Tabs */}
      <section className="mb-10">
        <div className="flex justify-center space-x-6 mb-6 border-b border-gray-300 pb-4">
          {["Product Details", "Rating & Reviews", "FAQs"].map((tab) => (
            <button
              key={tab}
              className={`text-lg font-semibold ${
                activeTab === tab ? "border-b-4 border-black" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* Section 2: Reviews */}
      <section>
        <h2 className="text-2xl font-bold mb-4">All Reviews (451)</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`p-4 border rounded-lg shadow-sm ${
                review.highlight ? "border-yellow-400" : "border-gray-300"
              }`}
            >
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-500 text-lg">
                  {"★".repeat(Math.floor(review.rating))}
                  {review.rating % 1 ? "☆" : ""}
                </div>
                <span className="ml-2 text-green-500 text-sm font-semibold">✔</span>
              </div>
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{review.review}</p>
              <p className="text-sm text-gray-500">Posted on {review.date}</p>
              <div className="absolute top-4 right-4 cursor-pointer">
                <span>⋮</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600">
            Load More Reviews
          </button>
        </div>
      </section>
    </div>
  );
};

export default ReviewsSection;
