import Image from "next/image";

export default function Component() {
  return (
    <div className="bg-white p-6 md:p-12 relative overflow-hidden">
      <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2 lg:gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-6 lg:space-y-8 mt-48 pb-2 relative">
          {/* Dollar sign near heading */}
          <Image
            src="/vec1.png"
            alt="Dollar sign"
            width={32}
            height={32}
            className="absolute -top-12 right-1/4 opacity-100"
          />
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-purple-700 lg:leading-snug">
            Start making money from your returns.
          </h1>
          <p className="text-md text-gray-600">
            Built for Shopify merchants of all sizes.
          </p>
          {/* Purple box near text */}
          <Image
            src="/box1.png"
            alt="Decorative purple box"
            width={48}
            height={48}
            className="absolute left-0 top-24"
          />
          <div className="flex flex-wrap gap-4 relative">
            <button className="bg-purple-700 text-white rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200">
              🚀 Install app now
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-800 rounded-full px-6 py-3 text-sm font-semibold border border-gray-300 transition-colors duration-200 flex items-center gap-2">
              💎 Built for Shopify
            </button>
            {/* Dollar sign near buttons */}
            <Image
              src="/Vector.png"
              alt="Dollar sign"
              width={24}
              height={24}
              className="absolute -bottom-8 right-1/3 opacity-80"
            />
            {/* Purple box near buttons */}
            <Image
              src="/box2.png"
              alt="Decorative box"
              width={40}
              height={40}
              className="absolute -bottom-12 left-1/4"
            />
          </div>
        </div>
        {/* Right Section */}
        <div className="relative flex items-center">
          {/* Main card with image */}
          <div className="relative bg-white shadow-xl rounded-lg overflow-hidden w-60 md:w-72 lg:w-70 h-80 lg:h-[22rem]">
            <Image
              src="/images/sweater-model.jpg"
              alt="Person wearing a sweater"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Overlapping product details card */}
          <div className="absolute top-[40%] -right-[5%] bg-white shadow-lg rounded-xl p-6 max-w-xs">
            <div className="space-y-4">
              <h2 className="text-lg md:text-2xl font-semibold text-purple-700">
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
          {/* Decorative elements */}
          <div className="absolute bottom-20 right-32">
            <Image
              src="/box1.png"
              alt="Decorative purple box"
              width={48}
              height={48}
              className="mb-4"
            />
            <Image
              src="/box2.png"
              alt="Decorative purple box"
              width={64}
              height={64}
            />
          </div>
          <div className="absolute bottom-28 right-16">
            <Image
              src="/vec1.png"
              alt="Dollar sign"
              width={24}
              height={24}
              className="mb-4"
            />
            <Image
              src="/Vector.png"
              alt="Dollar sign"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </div>
  );
}