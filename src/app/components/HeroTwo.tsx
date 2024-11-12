import Image from "next/image";

export default function Component() {
  return (
    <div className="bg-white p-6 md:p-12 relative">
      <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2 lg:gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-8 lg:space-y-8 mt-60 relative right-24 -left-1/3">
          <h1 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-purple-950">
            Start making money from your returns.
          </h1>
          <p className="text-md text-indigo-700">
            Built for Shopify merchants of all sizes.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-purple-700 text-white rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200">
              🚀 Install app now
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-800 rounded-full px-6 py-2 text-sm font-semibold border border-gray-300 transition-colors duration-200 flex items-center gap-2">
              💎 Built for Shopify
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="relative flex items-center">
          {/* Background decorative elements */}
          <div className="absolute -z-10 -right-6 bottom-10 flex flex-col gap-4 transform">
            <div className="w-16 h-16 bg-purple-200 rounded-md"></div>
            <div className="w-20 h-20 bg-purple-100 rounded-md"></div>
            <span className="text-purple-500 text-2xl">$</span>
          </div>
          {/* Main card with image */}
          <div className="relative bg-white shadow-xl rounded-lg overflow-hidden w-60 md:w-72 lg:w-70 h-80 lg:h-[22rem]">
            <Image
              src="/cruise.webp"
              alt="Person wearing a sweater"
              layout="fill"
              objectFit="cover"
              className="rounded-lg" 
            />
          </div>
          {/* Overlapping product details card */}
          <div className="absolute top-[40%] right-[22%] bg-white shadow-lg rounded-xl p-6 max-w-xs transform translate-x-8 lg:translate-x-12">
            <div className="space-y-4">
              <h2 className="text-lg md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-purple-950">
                Sweater in Everyday Cotton
              </h2>
              <p className="text-gray-600 text-xs leading-relaxed">
                The perfect boxy-fit sweater, The Boxy Sweater in Everyday
                Cotton is a layering essential. Featuring a chunky rib stitch at
                the crew neckline, along the hem, and sleeve cuffs, it has
                dropped shoulders for a relaxed edge. It's made with 100%
                organic cotton, and designed to be styled solo or easily topped
                with a blazer or cardigan.
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-700">
                  Color: Brown
                </p>
                <div className="flex gap-2">
                  <button className="w-5 h-5 rounded-full bg-[#c4a996] ring-2 ring-offset-2 ring-green-700"></button>
                  <button className="w-5 h-5 rounded-full bg-slate-700"></button>
                </div>
              </div>
              <button className="w-full bg-purple-700 text-white py-2 rounded-full text-base font-semibold transition-colors duration-200">
                Add to Cart | $40
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements positioned to match the design */}
      <Image
        src="/Vector.png"
        alt="Dollar sign"
        width={32}
        height={32}
        className="absolute bottom-32 left-[60%] opacity-100"
      />
      <Image
        src="/vec1.png"
        alt="Dollar sign"
        width={24}
        height={24}
        className="absolute top-[] left-[40%] opacity-100"
      />
      <Image
        src="/box2.png"
        alt="Purple box"
        width={100}
        height={100}
        className="absolute top-[100%] right-[40%] opacity-100"
      />
      <Image
        src="/box1.png"
        alt="Light purple box"
        width={40}
        height={40}
        className="absolute top-[] right-[45%] opacity-100"
      />
    </div>
  );
}