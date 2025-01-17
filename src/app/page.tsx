
import Image from "next/image";
import Footer from '../app/footer';


export default function Home() {
  return (
    <div>

      <section className="container max-w-7xl mx-auto text-center flex flex-col lg:flex-row items-center justify-between bg-white relative">
        <div className="lg:w-1/2 md:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            FIND CLOTHES <br />
            THAT MATCHES <br />
            YOUR STYLE
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="bg-black text-white py-3 px-8 rounded-full hover:bg-blue-500 transition-colors">
            Shop Now
          </button>
        </div>


        <div className="relative md:w-1/2 max-w-md lg:max-w-full mt-8 lg:mt-0">
          <Image
            src="/images/fashion1.png"
            alt="Fashion Style"
            width={500}
            height={800}
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
      </section>
      <section className="bg-black py-6">

        <div className="flex justify-center items-center space-x-14">
          <Image
            src="/images/ver.png"
            alt="Versace"
            width={96}
            height={96}
          />
          <Image
            src="/images/zara.png"
            alt="Zara"
            width={96}
            height={96}
          />
          <Image
            src="/images/gucci.jpg"
            alt="Gucci"
            width={96}
            height={96}
          />
          <Image
            src="/images/prada.jpg"
            alt="Prada"
            width={96}
            height={96}
          />
          <Image
            src="/images/calvin.png"
            alt="Calvin Klein"
            width={96}
            height={96}
          />
        </div>
      </section>



      <section className="container max-w-7xl mx-auto py-10 px-5">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block text-center">NEW ARRIVALS</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 ">
          <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
            <Image
              src="/images/T-shirt.png"
              alt="T-shirt with Tape Details"
              width={500}
              height={500}
              className="rounded-md mb-4 object-cover image-size"
            />
            <h3 className="text-sm font-medium mb-2">T-shirt with Tape Details</h3>
            <div className="flex mb-2">
              <span className="text-yellow-400 text-sm">★★★★☆</span>
              <span className="text-gray-500 text-xs ml-2">4.5/5</span>
            </div>
            <p className="text-lg font-bold">$120</p>
          </div>
          <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
            <Image
              src="/images/jeans.png"
              alt="Skinny Fit Jeans"
              width={500}
              height={500}
              className="rounded-md mb-4 object-cover image-size"
            />
            <h3 className="text-sm font-medium mb-2">Skinny Fit Jeans</h3>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-sm">★★★☆☆</span>
              <span className="text-gray-500 text-xs ml-2">3.5/5</span>
            </div>
            <p className="text-lg font-bold">
              $240 <span className="line-through text-gray-400">$260</span>
              <span className="bg-red-100 text-red-500 rounded-full px-3 py-1 text-sm font-semibold">-20%</span>
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
            <Image
              src="/images/shirt.png"
              alt="Checkered Shirt"
              width={500}
              height={500}
              className="rounded-md mb-4 object-cover image-size"
            />
            <h3 className="text-sm font-medium mb-2">Checkered Shirt</h3>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-sm">★★★★☆</span>
              <span className="text-gray-500 text-xs ml-2">4.5/5</span>
            </div>
            <p className="text-lg font-bold">$180</p>
          </div>
          <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
            <Image
              src="/images/stripesshirt.png"
              alt="Sleeve Striped T-shirt"
              width={500}
              height={500}
              className="rounded-md mb-4 object-cover image-size"
            />
            <h3 className="text-sm font-medium mb-2">Sleeve Striped T-shirt</h3>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-sm">★★★★☆</span>
              <span className="text-gray-500 text-xs ml-2">4.5/5</span>
            </div>
            <p className="text-lg font-bold">
              $130 <span className="line-through text-gray-400">$160</span>
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

      <section className="container max-w-7xl mx-auto py-10 px-5">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold relative inline-block text-center">TOP SELLING </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 ">
          <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
            <Image
              src="/images/Verticalstriped.png"
              alt="T-shirt with Tape Details"
              width={500}
              height={500}
              className="rounded-md mb-4 object-cover image-size"
            />
            <h3 className="text-sm font-medium mb-2">T-shirt with Tape Details</h3>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-sm">★★★★★</span>
              <span className="text-gray-500 text-xs ml-2">5.0/5</span>
            </div>
            <p className="text-lg font-bold">
              $212 <span className="line-through text-gray-400">$232</span>
              <span className="bg-red-100 text-red-500 rounded-full px-3 py-1 text-sm font-semibold">-20%</span>
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
            <Image
              src="/images/courageshirt.png"
              alt="Skinny Fit Jeans"
              width={500}
              height={500}
              className="rounded-md mb-4 object-cover image-size"
            />
            <h3 className="text-sm font-medium mb-2">Skinny Fit Jeans</h3>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-sm">★★★★☆</span>
              <span className="text-gray-500 text-xs ml-2">4.0/5</span>
            </div>
            <p className="text-lg font-bold">$145</p>
          </div>
          <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
            <Image
              src="/images/looseshort.png"
              alt="Checkered Shirt"
              width={500}
              height={500}
              className="rounded-md mb-4 object-cover image-size"
            />
            <h3 className="text-sm font-medium mb-2">Checkered Shirt</h3>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-sm">★★★☆☆</span>
              <span className="text-gray-500 text-xs ml-2">3.0/5</span>
            </div>
            <p className="text-lg font-bold">$80</p>
          </div>
          <div className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow">
            <Image
              src="/images/fadedjeans.png"
              alt="Sleeve Striped T-shirt"
              width={500}
              height={500}
              className="rounded-md mb-4 object-cover image-size"
            />
            <h3 className="text-sm font-medium mb-2">Sleeve Striped T-shirt</h3>
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-sm">★★★★☆</span>
              <span className="text-gray-500 text-xs ml-2">4.5/5</span>
            </div>
            <p className="text-lg font-bold">$210</p>
          </div>
        </div>


        <div className="text-center mt-8">
          <button className="px-8 py-3 text-black text-sm font-medium rounded-full transition-colors">
            View All
          </button>
        </div>
      </section>
      <section className="container max-w-7xl mx-auto py-10 px-5 bg-gray-100">

        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            BROWSE BY DRESS STYLE
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-100 rounded-lg shadow-lg">
          <div className="bg-white rounded-lg overflow-hidden">
            <Image
              src="/images/casual2.png"
              alt="Casual"
              width={500}
              height={240}
              className="w-full h-60 object-fit"
            />
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <Image
              src="/images/formal3.png"
              alt="Formal"
              width={500}
              height={240}
              className="w-full h-60 object-fit"
            />
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <Image
              src="/images/partywear2.png"
              alt="Party"
              width={500}
              height={240}
              className="w-full h-60 object-fit"
            />
          </div>

          <div className="bg-white rounded-lg overflow-hidden">
            <Image
              src="/images/gym2.png"
              alt="Gym"
              width={500}
              height={240}
              className="w-full h-60 object-fit"
            />
          </div>
        </div>


      </section>
      <section className="container max-w-7xl mx-auto py-10 px-5">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex space-x-4">
            <button
              className="swiper-button-prev bg-gray-100 text-black rounded-full p-2 hover:bg-gray-200"
              aria-label="Previous"
            >

            </button>
            <button
              className="swiper-button-next bg-gray-100 text-black rounded-full p-2 hover:bg-gray-200"
              aria-label="Next"
            >
              ← →
            </button>
          </div>
        </div>


        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-gray-50 border rounded-lg shadow-md p-6 flex flex-col">
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-500">
                {"★".repeat(5)}
              </div>
              <span className="ml-2 text-green-600 font-medium text-sm">Verified</span>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;I&apos;m blown away by the quality and style of the clothes I received
              from Shop.co. From casual wear to elegant dresses, every piece I&apos;ve
              bought has exceeded my expectations.&quot;

            </p>
            <h3 className="font-semibold text-gray-900">Sarah M.</h3>
          </div>
          <div className="bg-gray-50 border rounded-lg shadow-md p-6 flex flex-col">
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-500">
                {"★".repeat(5)}
              </div>
              <span className="ml-2 text-green-600 font-medium text-sm">Verified</span>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;Finding clothes that align with my personal style used to be a
              challenge until I discovered Shop.co. The range of options they offer
              is truly remarkable, catering to a variety of tastes and occasions.&quot;
            </p>
            <h3 className="font-semibold text-gray-900">Alex K.</h3>
          </div>
          <div className="bg-gray-50 border rounded-lg shadow-md p-6 flex flex-col">
            <div className="flex items-center mb-3">
              <div className="flex text-yellow-500">
                {"★".repeat(5)}
              </div>
              <span className="ml-2 text-green-600 font-medium text-sm">Verified</span>
            </div>
            <p className="text-gray-700 mb-4">
              &quot;As someone who&apos;s always on the lookout for unique fashion pieces,
              I&apos;m thrilled to have stumbled upon Shop.co. The selection of clothes
              is not only diverse but also on-point with the latest trends.&quot;

            </p>
            <h3 className="font-semibold text-gray-900">James L.</h3>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
