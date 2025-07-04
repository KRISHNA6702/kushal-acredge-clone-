import React from 'react';
import farmhouseImage from './assets/hunt.jpg'; // ✅ Make sure this path is correct

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      {/* HEADER */}
      <div className="h-[150px] w-full flex items-center justify-between px-10 bg-white">
        <h1 className="text-[45px] font-bold"> Clone Acredge</h1>

        <div className="flex space-x-8 text-[20px]">
          <span>HOME</span>
          <span>GALLERY</span>
          <span>ABOUT US</span>
          <span>CONTACT US</span>
        </div>

        <button className="bg-black hover:bg-blue-600 text-white text-[16px] px-4 py-2 rounded-xl shadow-md">
          Download Brochure
        </button>
      </div>

      {/* HERO SECTION */}
      <div className="flex-1 bg-[#f5f5dc] px-20 py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Text Section */}
          <div className="space-y-6 max-w-xl">
            <h1 className="text-[40px] font-bold">Exclusive Farmhouse Living</h1>
            <h2 className="text-[20px] font-semibold text-gray-700">
              where nature & luxury come together
            </h2>

            <div className="flex items-center space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white text-[16px] px-4 py-2 rounded-xl shadow-md">
                Download Brochure
              </button>
              <span className="text-[16px] text-gray-800">Top Rated – 100+ clients</span>
            </div>
          </div>

          {/* Image Section */}
          <img
            src={farmhouseImage}
            alt="Farmhouse"
            className="w-[400px] h-auto rounded-xl shadow-md"
          />
        </div>

        {/* GALLERY SECTION */}
        <div className="mt-20">
          <h1 className="text-[42px] font-semibold mb-4 ml-140">Gallery</h1>
          <p className="text-[18px] text-gray-700 ml-90">
            Luxury Meets Nature: Sustainable Farmhouse Communities in Delhi NCR
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white p-4 rounded-lg shadow text-center">Photo 1</div>
            <div className="bg-white p-4 rounded-lg shadow text-center">Photo 2</div>
            <div className="bg-white p-4 rounded-lg shadow text-center">Photo 3</div>
            <div className="bg-white p-4 rounded-lg shadow text-center">Photo 4</div>
            <div className="bg-white p-4 rounded-lg shadow text-center">Photo 5</div>
            <div className="bg-white p-4 rounded-lg shadow text-center">Photo 6</div>
          </div>
        </div>
        <div><h1 className="text-[42px] mt-20 font-semibold">
          Build your own dreams with us</h1></div>
          <div><p>Kushal Acredge Farm Developers specializes in crafting sustainable and luxurious farmhouses and farmhouse communities in Delhi NCR, with a key focus on Naugaon. We create eco-friendly, modern living spaces that blend nature, comfort, and exclusivity. Our meticulously planned communities feature world-class amenities, gated security, landscaped gardens, organic farming spaces, and modern infrastructure. Whether you're looking for a peaceful retreat or a smart investment in nature-centric living, our farmhouses offer the perfect balance of serenity and sophistication.</p></div>
          <div><h1 className="text-[42px] mt-20 font-semibold ml-120">customer reviews</h1></div>
          {/* TESTIMONIAL SECTION */}
<div className="bg-[#f5f5dc] px-10 py-20">
  <h2 className="text-3xl font-light mb-10 text-center">What Our Clients Say</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    {/* Review 1 */}
    <div className="bg-white p-6 rounded-xl shadow-md">
      <p className="text-lg text-gray-800 mb-4">
        <strong>Kushal Acredge Farm Developers</strong> turned our dream of owning a luxurious yet sustainable farmhouse into reality. The attention to detail, serene environment, and top-notch amenities exceeded our expectations. It’s not just a property; it’s a lifestyle upgrade!
      </p>
      <p className="text-right font-semibold text-blue-700">— Amit Jain</p>
    </div>

    {/* Review 2 */}
    <div className="bg-white p-6 rounded-xl shadow-md">
      <p className="text-lg text-gray-800 mb-4">
        Choosing <strong>Kushal Acredge</strong> was the best decision we made. The team was transparent, supportive, and delivered more than promised. Every time we visit, it feels like a peaceful escape from the city chaos.
      </p>
      <p className="text-right font-semibold text-blue-700">— Radhika Mehta</p>
       </div>
        </div>
        </div>
        <div className="text-lg text-bold mb-4 ml-150"> Cloner is krishna batra </div>
        <div className="text-lg text-bold mb-4  ml-160"> From GTBIT</div>

      </div>
      
    </div>
  );
}

export default App;

