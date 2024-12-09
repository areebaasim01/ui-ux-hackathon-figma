import Image from "next/image";

const Selling = () => {
 
  const img1 = "/image7.png";
  const img2 = "/image8.png";
  const img3 = "/image9.png";
  const img4 = "/image10.png";
 

  return (
    <div className="font-extrabold text-3xl sm:text-5xl flex flex-col items-center mt-12 sm:mt-24">
      <h1 className="mb-6 sm:mb-10">TOP SELLING</h1>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
        {/* Product 1 */}
        <div className="flex flex-col items-center gap-4 w-[150px] sm:w-auto">
          <Image src={img1} alt="Vertical Striped Shirt" width={295} height={298} className="rounded-lg" />
          <p className="text-[#000000] text-sm sm:text-xl text-center">Vertical Striped Shirt</p>
          <h5 className="text-[#000000] text-lg sm:text-2xl font-bold">$100</h5>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center gap-4 w-[150px] sm:w-auto">
          <Image src={img2} alt="Courage Graphic T-shirt" width={295} height={298} className="rounded-lg" />
          <p className="text-[#000000] text-sm sm:text-xl text-center">Courage Graphic T-shirt</p>
          <h5 className="text-[#000000] text-lg sm:text-2xl font-bold">$145</h5>
        </div>

        {/* Product 3 */}
        <div className="flex flex-col items-center gap-4 w-[150px] sm:w-auto">
          <Image src={img3} alt="Loose Fit Bermuda Shorts" width={295} height={298} className="rounded-lg" />
          <p className="text-[#000000] text-sm sm:text-xl text-center">Loose Fit Bermuda Shorts</p>
          <h5 className="text-[#000000] text-lg sm:text-2xl font-bold">$80</h5>
        </div>

        {/* Product 4 */}
        <div className="flex flex-col items-center gap-4 w-[150px] sm:w-auto">
          <Image src={img4} alt="Faded Skinny Jeans" width={295} height={298} className="rounded-lg" />
          <p className="text-[#000000] text-sm sm:text-xl text-center">Faded Skinny Jeans</p>
          <h5 className="text-[#000000] text-lg sm:text-2xl font-bold">$210</h5>
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-12 sm:mt-16 flex justify-center">
        <Image src="/Frame29.png" alt="View All" width={200} height={50} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Selling;
