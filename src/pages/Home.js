

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Play, ChevronRight, ShoppingBag } from "lucide-react";

function Home() {
  return (
    <div className="bg-black text-white overflow-hidden bg-green-500/10">

      {/* HERO SECTION */}
     <div className="relative min-h-screen overflow-hidden">


  <div className="absolute inset-0 w-full h-full">

    <img
      src="https://images.pexels.com/photos/30661698/pexels-photo-30661698.jpeg?cs=srgb&dl=pexels-mysara-hassan-116278479-30661698.jpg&fm=jpg"
      alt=""
      className="w-full h-full object-cover opacity-50"
    />

    <div className="absolute inset-0 bg-black/75"></div>

  </div>

  <div className="relative max-w-7xl mx-auto px-6 py-4">

    <Navbar />

    {/* FLOATING REVIEW CARD  */}
    <div className="absolute left-0 top-[600px] z-30 hidden lg:block">

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl px-5 py-4 w-[290px]">

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/[0.06] to-transparent"></div>

        <div className="relative z-10">

          {/* User */}
          <div className="flex items-center gap-3">

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt=""
              className="w-12 h-12 rounded-full object-cover border border-white/20"
            />

            <div>

              <h3 className="text-white text-sm font-medium">
                Rose Merry
              </h3>

              <div className="flex items-center gap-1 mt-1">

                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-yellow-400 text-xs">★</span>
                <span className="text-yellow-400 text-xs">★</span>

              </div>

            </div>

          </div>

          {/* Text */}
          <p className="text-gray-300 text-xs leading-6 mt-4">
            I can’t express how thrilled I am with my
            new natural plant! They bring such a
            fresh and vibrant energy to my home.
          </p>

        </div>

      </div>

    </div>

  
    <div className="grid lg:grid-cols-2 items-center gap-12 mt-10">

      {/* LEFT */}
      <div>

        <h1 className="font-bold leading-tight text-5xl md:text-7xl">
          Earth’s Exhale
        </h1>

        <p className="text-gray-300 mt-5 text-lg max-w-md">
          Beautiful indoor plants for your home and desk.
        </p>

        <div className="flex items-center gap-5 mt-8">

          <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
            Buy Now
          </button>

          <div className="flex items-center gap-3">

            <div className="w-14 h-14 border border-white rounded-full flex justify-center items-center">
              <Play size={18} fill="white" />
            </div>

            <span>Live Demo</span>

          </div>

        </div>

      </div>

      {/* RIGHT CARD */}
      <div className="w-full flex justify-center lg:justify-end">

        <div
          className="relative p-6 rounded-[40px] overflow-hidden"
          style={{
            width: "360px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >

       
          <div className="relative flex justify-center items-center">

            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhh1OiB2z9fEt3kNMbv2y1R2JB4OtiFr-kPw&s"
              alt=""
              className="w-full relative"
              style={{
                height: "250px",
                objectFit: "contain",
                zIndex: 2,
              }}
            />

          </div>

       
          <div className="mt-5">

            <p className="text-gray-400 text-sm tracking-widest">
              Indoor Plant
            </p>

            <div className="flex justify-between items-center mt-3">

              <h2 className="text-3xl font-bold">
                Aglaonema Plant
              </h2>

              <div className="w-12 h-12 rounded-full bg-white/10 flex justify-center items-center cursor-pointer">
                <ChevronRight />
              </div>

            </div>

            <div className="flex justify-between items-center mt-6">

              <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
                Buy Now
              </button>

              <div className="flex gap-2">

                <span className="w-3 h-3 rounded-full bg-white"></span>

                <span className="w-3 h-3 rounded-full bg-white/30"></span>

                <span className="w-3 h-3 rounded-full bg-white/30"></span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* PRODUCT SECTION 1  */}
    <div className="mt-60 relative overflow-hidden rounded-[45px] border border-green-400/20 bg-green-950/20 backdrop-blur-xl p-6">

      <div className="grid lg:grid-cols-2 items-center gap-12 relative z-10">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">

          <img
            src="https://secretgarden.ro/cdn/shop/files/IMG-3237.jpg?v=1750175902&width=3840"
            alt=""
            className="relative z-10 w-[300px] object-contain rounded-[50px]"
          />

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="text-5xl font-normal leading-tight">
            Desk Decoration Plant
          </h2>

          <p className="text-gray-300 mt-5 text-lg leading-8 max-w-lg">
            Add natural beauty to your workspace and make your
            environment fresh, aesthetic, and relaxing.
          </p>

          <div className="mt-8 flex items-center gap-5">

            <h3 className="text-4xl font-normal text-green-400">
              Rs. 599/-
            </h3>

            <span className="text-gray-400 line-through text-xl">
              Rs. 899
            </span>

          </div>

          <div className="flex items-center gap-5 mt-5">

            <button className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-green-400 transition-all duration-300">
              Explore More
            </button>

            <button className="w-14 h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300">
              <ShoppingBag size={20} />
            </button>

          </div>

        </div>

      </div>

    </div>

    {/* ================= PRODUCT SECTION 2 ================= */}
    <div className="mt-20 relative overflow-hidden rounded-[45px] border border-green-400/20 bg-green-950/20 backdrop-blur-xl p-8">

      <div className="grid lg:grid-cols-2 items-center gap-12 relative z-10 ml-10">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-5xl font-normal leading-tight">
            Modern Indoor Plant
          </h2>

          <p className="text-gray-300 mt-3 text-lg leading-8 max-w-lg">
            Decorate your room with elegant indoor plants
            and create a calm and refreshing atmosphere.
          </p>

          <div className="flex items-center gap-5 mt-8">

            <h3 className="text-4xl font-normal text-green-400">
              Rs. 599/-
            </h3>

            <span className="text-xl text-gray-500 line-through">
              Rs. 899
            </span>

          </div>

          <div className="flex items-center gap-5 mt-6">

            <button className="px-5 py-3 rounded-full bg-white text-black font-semibold hover:bg-green-400 hover:text-black transition-all duration-300">
              Explore More
            </button>

            <button className="w-14 h-14 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300">
              <ShoppingBag size={20} />
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1B7xBRbNvZct2xdBy60aiCWQZc2eBWmFEQ&s"
            alt=""
            className="relative z-10 w-[300px] object-contain rounded-[50px]"
          />

        </div>

      </div>

    </div>

  </div>

</div>

      {/* TOP SELLING */}
<div className="max-w-7xl mx-auto px-6 py-24">


  <div className="flex items-center justify-between mb-16">

    <div className="relative inline-block px-10 py-5">
   
    <span className="absolute top-0 left-0 w-12 h-12 border-t border-l border-green-400 rounded-tl-2xl ml-80"></span>

    <span className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-green-400 rounded-br-2xl"></span>
      <h1 className="md:text-5xl font-normal leading-tight text-center ml-80">
        Our Top Selling Plants
      </h1>
    </div>

  </div>

  {/* Cards */}
  <div className="grid lg:grid-cols-3 gap-10">

    {/* CARD 1 */}
    <div className="relative rounded-[50px] border border-yellow-400/30 bg-white/5 backdrop-blur-xl p-7">

      <div className="relative flex justify-center">

        <img
          src="https://www.livelyroot.com/cdn/shop/files/Zz_Plant.png?v=1690283634&width=2000"
          alt=""
          className="w-[240px] h-[300px] object-contain rounded-[30px]"
        />

      </div>


      <div className="mt-2 relative z-10">

        <h2 className="text-3xl font-bold mt-3">
          Aglaonema Plant
        </h2>

        <p className="text-gray-300 mt-4 leading-7">
          Beautiful decorative indoor plant for home and office.
        </p>

        <div className="flex justify-between items-center mt-4">

          <div>
            <h3 className="text-4xl font-bold text-yellow-300">
              Rs. 300/-
            </h3>
          </div>

          <button className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex justify-center items-center text-4xl">
            🛍
          </button>

        </div>

      </div>

    </div>

    {/* CARD 2 */}
    <div className="relative rounded-[50px] border border-green-400/30 bg-white/5 backdrop-blur-xl p-7">

      <div className="relative flex justify-center">

        <img
          src="https://www.livelyroot.com/cdn/shop/files/Zz_Plant.png?v=1690283634&width=2000"
          alt=""
          className="w-[240px] h-[300px] object-contain"
        />

      </div>

      <div className="mt-2 relative z-10">

        <h2 className="text-3xl font-bold mt-3">
          Snake Plant
        </h2>

        <p className="text-gray-300 mt-4 leading-7">
          Fresh and healthy indoor plant with aesthetic beauty.
        </p>

        <div className="flex justify-between items-center mt-4">

          <div>
            <h3 className="text-4xl font-bold text-green-300">
              Rs. 450/-
            </h3>
          </div>

          <button className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex justify-center items-center text-4xl">
            🛍
          </button>

        </div>

      </div>

    </div>

    {/* CARD 3 */}
    <div className="relative rounded-[50px] border border-purple-400/30 bg-white/5 backdrop-blur-xl p-7">

      <div className="relative flex justify-center">

        <img
          src="https://www.livelyroot.com/cdn/shop/files/Zz_Plant.png?v=1690283634&width=2000"
          alt=""
          className="w-[240px] h-[300px] object-contain"
        />

      </div>

      <div className="mt-2 relative z-10">

        <h2 className="text-3xl font-bold mt-3">
          Monstera Plant
        </h2>

        <p className="text-gray-300 mt-4 leading-7">
          Modern stylish plant for beautiful interior decoration.
        </p>

        <div className="flex justify-between items-center mt-4">

          <div>
            <h3 className="text-4xl font-bold text-purple-300">
              Rs. 520/-
            </h3>
          </div>

          <button className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex justify-center items-center text-4xl">
            🛍
          </button>

        </div>

      </div>

    </div>

  </div>

  {/* Cards */}
  <div className="grid lg:grid-cols-3 gap-10 mt-40">

    {/* CARD 1 */}
    <div className="relative rounded-[50px] border border-yellow-400/30 bg-white/5 backdrop-blur-xl p-7">

      <div className="relative flex justify-center">

        <img
          src="https://www.livelyroot.com/cdn/shop/files/Zz_Plant.png?v=1690283634&width=2000"
          alt=""
          className="w-[240px] h-[300px] object-contain rounded-[30px]"
        />

      </div>

      <div className="mt-2 relative z-10">

        <h2 className="text-3xl font-bold mt-3">
          Aglaonema Plant
        </h2>

        <p className="text-gray-300 mt-4 leading-7">
          Beautiful decorative indoor plant for home and office.
        </p>

        <div className="flex justify-between items-center mt-4">

          <div>
            <h3 className="text-4xl font-bold text-yellow-300">
              Rs. 300/-
            </h3>
          </div>

          <button className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex justify-center items-center text-4xl">
            🛍
          </button>

        </div>

      </div>

    </div>

    {/* CARD 2 */}
    <div className="relative rounded-[50px] border border-green-400/30 bg-white/5 backdrop-blur-xl p-7">

      <div className="relative flex justify-center">

        <img
          src="https://www.livelyroot.com/cdn/shop/files/Zz_Plant.png?v=1690283634&width=2000"
          alt=""
          className="w-[240px] h-[300px] object-contain"
        />

      </div>

      <div className="mt-2 relative z-10">

        <h2 className="text-3xl font-bold mt-3">
          Snake Plant
        </h2>

        <p className="text-gray-300 mt-4 leading-7">
          Fresh and healthy indoor plant with aesthetic beauty.
        </p>

        <div className="flex justify-between items-center mt-4">

          <div>
            <h3 className="text-4xl font-bold text-green-300">
              Rs. 450/-
            </h3>
          </div>

          <button className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex justify-center items-center text-4xl">
            🛍
          </button>

        </div>

      </div>

    </div>

    {/* CARD 3 */}
    <div className="relative rounded-[50px] border border-purple-400/30 bg-white/5 backdrop-blur-xl p-7">

      <div className="relative flex justify-center">

        <img
          src="https://www.livelyroot.com/cdn/shop/files/Zz_Plant.png?v=1690283634&width=2000"
          alt=""
          className="w-[240px] h-[300px] object-contain"
        />

      </div>

      <div className="mt-2 relative z-10">

        <h2 className="text-3xl font-bold mt-3">
          Monstera Plant
        </h2>

        <p className="text-gray-300 mt-4 leading-7">
          Modern stylish plant for beautiful interior decoration.
        </p>

        <div className="flex justify-between items-center mt-4">

          <div>
            <h3 className="text-4xl font-bold text-purple-300">
              Rs. 520/-
            </h3>
          </div>

          <button className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex justify-center items-center text-4xl">
            🛍
          </button>

        </div>

      </div>

    </div>

  </div>

</div>


{/*  CUSTOMER REVIEW */}
<div className="max-w-7xl mx-auto px-6 py-24">


  <div className="flex items-center ">

    <div>

     <div className="flex justify-center mb-16">

  <div className="relative inline-block px-10 py-5">
    
    <span className="absolute top-0 left-0 w-12 h-12 border-t border-l border-green-400 rounded-tl-2xl ml-80"></span>

   
    <span className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-green-400 rounded-br-2xl"></span>

    <h1 className=" md:text-5xl font-normal leading-tight text-center ml-80">
      Customer Review
    </h1>

  </div>

</div>
    </div>

  </div>

  {/* Review Cards */}
  <div className="grid lg:grid-cols-3 gap-10">

    <div className="relative rounded-[50px] border border-yellow-400/30 bg-white/5 backdrop-blur-xl p-8 overflow-hidden">

      <div className="flex items-center gap-4 relative z-10">

        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt=""
          className="w-16 h-16 rounded-full object-cover border-2 border-yellow-300"
        />

        <div>
          <h2 className="text-2xl font-semibold">
            Shelly Russel
          </h2>

          <p className="text-yellow-300 text-sm mt-1">
            ★★★★★
          </p>
        </div>

      </div>

      <p className="text-gray-300 mt-6 leading-8 text-lg relative z-10">
        “Amazing quality plants and beautiful packaging.
        My room looks fresh and aesthetic now.”
      </p>

    </div>

    {/* CARD 2 */}
    <div className="relative rounded-[50px] border border-green-400/30 bg-white/5 backdrop-blur-xl p-8 overflow-hidden">


     
      <div className="flex items-center gap-4 relative z-10">

        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt=""
          className="w-16 h-16 rounded-full object-cover border-2 border-green-300"
        />

        <div>
          <h2 className="text-2xl font-semibold">
            Lula Rolfson
          </h2>

          <p className="text-green-300 text-sm mt-1">
            ★★★★★
          </p>
        </div>

      </div>


      <p className="text-gray-300 mt-6 leading-8 text-lg relative z-10">
        “These indoor plants completely changed my workspace.
        Highly recommended for plant lovers.”
      </p>

    </div>

    {/* CARD 3 */}
    <div className="relative rounded-[50px] border border-purple-400/30 bg-white/5 backdrop-blur-xl p-8 overflow-hidden">


      <div className="flex items-center gap-4 relative z-10">

        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt=""
          className="w-16 h-16 rounded-full object-cover border-2 border-purple-300"
        />

        <div>
          <h2 className="text-2xl font-semibold">
            Carol Huels
          </h2>

          <p className="text-purple-300 text-sm mt-1">
            ★★★★★
          </p>
        </div>

      </div>

      <p className="text-gray-300 mt-6 leading-8 text-lg relative z-10">
        “Best indoor plant collection I’ve ever purchased.
        Stylish, healthy, and premium quality.”
      </p>

    </div>

  </div>

</div>


{/*  OUR BEST O2 SECTION  */}
<div className="max-w-7xl mx-auto px-6 py-24 overflow-hidden relative">

  <div className="flex justify-center mb-20 relative z-10">

    <div className="relative inline-block px-10 py-5">

    
      <span className="absolute top-0 left-0 w-12 h-12 border-t border-l border-green-400 rounded-tl-2xl"></span>

      <span className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-green-400 rounded-br-2xl"></span>

      <h1 className="md:text-5xl font-normal leading-tight text-center">
        Our Best <span className="text-green-400">O2</span>
      </h1>

    </div>

  </div>

  {/* Main Card */}
  <div className="relative rounded-[55px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden p-8 md:p-14">

  
    <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] via-transparent to-white/[0.02]"></div>

    <div className="grid lg:grid-cols-2 items-center gap-16 relative z-10">

      <div className="flex justify-center relative">

        <img
          src="https://thumbs.dreamstime.com/b/stylish-rubber-plant-pot-indoor-home-decor-elegant-stone-perfect-adding-touch-greenery-to-any-space-374910323.jpg"
          alt=""
          className="relative z-10 w-[280px] md:w-[400px] object-contain hover:scale-105 transition-all duration-500 rounded-[60px]"
        />

      </div>

  
      <div>

        <p className="uppercase tracking-[4px] text-green-400 text-sm mb-4">
          Pure Oxygen
        </p>

        <h2 className="text-4xl md:text-4xl font-semibold leading-tight">
          We Have Small And Best O2 Plants Collection’s
        </h2>

        <p className="text-gray-300 mt-6 text-lg leading-9 max-w-xl">
          Oxygen-producing plants, often referred to as
          “O2 plants,” release oxygen into the atmosphere
          through photosynthesis and naturally purify air.
        </p>

  
        <div className="flex flex-wrap items-center gap-6 mt-10">

          <button className="px-8 py-3 rounded-full border border-green-400 hover:bg-green-400 hover:text-black transition-all duration-300">
            Explore
          </button>

      
          <div className="flex items-center gap-5 ml-40">

            <button className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300">
              ❮
            </button>

            <span className="text-lg text-white">
              01<span className="text-gray-500">/04</span>
            </span>

            <button className="w-12 h-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300">
              ❯
            </button>

          </div>

        </div>

      </div>

    </div>

  </div>

  
  <div className="flex justify-center gap-3 mt-10">

    <span className="w-8 h-[4px] rounded-full bg-white"></span>

    <span className="w-2 h-2 rounded-full bg-white/30 mt-[2px]"></span>

    <span className="w-2 h-2 rounded-full bg-white/30 mt-[2px]"></span>

  </div>

</div>


      <Footer />

    </div>
  );
}

export default Home;