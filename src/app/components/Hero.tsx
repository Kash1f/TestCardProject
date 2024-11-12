import Image from "next/image";

export default function Component() {
  return (
    <div className="bg-white p-16 md:p-12 relative">
      <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2 lg:gap-10 items-center">
        {/* Left Section */}

        <div className="absolute w-[30%] h-[222%] left-[12%]">
          <Image
            src="/vec2.png"
            alt="Person wearing a sweater"
            layout="fill"
            objectFit="cover"
            className="opacity-100"
          />
        </div>

        <div className="space-y-8 lg:space-y-8 mt-60 relative right-24 -left-1/4">
          <h1 className="text-5xl font-bold text-transparent p-2 bg-clip-text bg-gradient-to-b from-purple-600 to-indigo-950">
            Start making money <br></br>from your returns.
          </h1>
          <p className="text-md text-indigo-900">
            Built for Shopify merchants of all sizes.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-indigo-700 text-white rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 flex items-center">
              <Image
                src="/Fullcolor.png" 
                layout="intrinsic"
                width={20}
                height={20}
                alt="Shopify logo"
                className="w-4 h-4 mr-2"
              />
              Install app now
            </button>
            <button className="bg-blue-100 text-[#1a1a1a] rounded-lg text-sm font-bold inline-flex items-center w-30 h-6 mt-3 p-1">
              💎Built for Shopify
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="relative flex items-center">
          {/* Background decorative elements */}
          {/* <div className="absolute -z-10 -right-6 bottom-10 flex flex-col gap-4 transform">
            <div className="w-16 h-16 bg-purple-200 rounded-md"></div>
            <div className="w-20 h-20 bg-purple-100 rounded-md"></div>
            <span className="text-purple-500 text-2xl">$</span>
          </div> */}
          {/* Main card with image */}
          <div className="relative bg-white w-80 h-[26rem] md:w-72 lg:w-72 lg:h-[24rem] rounded-xl">
            <Image
              src="/image.png"
              alt="Person wearing a sweater"
              width={320} 
              height={430}
              className="object-cover rounded-lg h-full w-full" 
            />
          </div>

          {/* Overlapping product details card */}
          <div className="absolute top-[27%] right-[28%] bg-white shadow-2xl rounded-xl p-6 max-w-xs transform translate-x-8 lg:translate-x-12 opacity-100">
            <div className="space-y-8">
              <h2 className="text-lg md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-600 to-indigo-950">
                Sweater in Everyday Cotton
              </h2>
              <p className="text-gray-600 text-xs leading-relaxed">
                The perfect boxy-fit sweater, The Boxy Sweater in Everyday
                Cotton is a layering essential. Featuring a chunky rib stitch at
                the crew neckline, along the hem, and sleeve cuffs, it has
                dropped shoulders for a relaxed edge. It is made with 100%
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
              <button className="w-full bg-purple-950 text-white py-2 rounded-full text-base font-semibold transition-colors duration-200">
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
        width={25}
        height={25}
        className="absolute left-[56%] bottom-[-28%] opacity-100"
      />
      <Image
        src="/vec1.png"
        alt="Dollar sign"
        width={16}
        height={16}
        className="absolute left-[52%] bottom-[-9%] opacity-100"
      />
      <Image
        src="/box2.png"
        alt="Purple box"
        width={90}
        height={90}
        className="absolute top-[100%] right-[41%] opacity-100"
      />
      <Image
        src="/box1.png"
        alt="Light purple box"
        width={60}
        height={60}
        className="absolute right-[45%] bottom-[-24%] opacity-100"
      />
    </div>
  );
}
