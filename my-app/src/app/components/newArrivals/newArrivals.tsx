import Image from "next/image";

export default function NewArrivals() {
  return (
    <div className="bg-white flex items-center flex-col justify-center object-cover">
      {/* Header */}
      <h1 className="pt-5 font-integral text-[30px] md:text-[48px] font-bold leading-[57.6px]">
        New Arrivals
      </h1>

      {/* Product Grid */}
      <div className="w-full h-fit flex flex-col md:flex-row items-center justify-between md:mx-[100px] gap-4 md:gap-8 md:mt-10">
        {/* Product 1 */}
        <div className="flex flex-col items-center gap-3 w-[200px] md:w-[295px] h-[200px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]">
          <Image
            src="/arrival1.png"
            alt="T-Shirt with Tape Details"
            width={295}
            height={298}
            className="rounded-[20px]"
          />
          <h2 className="capitalize text-center font-satoshi text-[18px] font-bold leading-[27px]">
            T-Shirt with Tape Details
          </h2>
          <Image
            src="/stars.png"
            alt="Rating Stars"
            width={150}
            height={19}
            className="w-[150px]"
          />
          <p className="text-2xl font-bold">$120</p>
        </div>

        {/* Product 2 */}
        <div className="flex flex-col items-center gap-3 w-[200px] md:w-[295px] h-[200px] md:h-[298px] rounded-[13.42px] md:rounded-[20px] bg-[#F0EEED]">
          <Image
            src="/arrival2.png"
            alt="Skinny Fit Jeans"
            width={295}
            height={298}
            className="rounded-[20px]"
          />
          <h2 className="capitalize text-center font-satoshi text-[18px] font-bold leading-[27px]">
            Skinny Fit Jeans
          </h2>
          <Image
            src="/stars.png"
            alt="Rating Stars"
            width={150}
            height={19}
            className="w-[150px]"
          />
          <p className="text-2xl font-bold">$240</p>
        </div>

        {/* Product 3 */}
        <div className="hidden md:flex flex-col items-center gap-3 w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED]">
          <Image
            src="/arrival3.png"
            alt="Checkered Shirt"
            width={295}
            height={298}
            className="rounded-[20px]"
          />
          <h2 className="capitalize text-center font-satoshi text-[18px] font-bold leading-[27px]">
            Checkered Shirt
          </h2>
          <Image
            src="/stars.png"
            alt="Rating Stars"
            width={150}
            height={19}
            className="w-[150px]"
          />
          <p className="text-2xl font-bold">$180</p>
        </div>

        {/* Product 4 */}
        <div className="hidden md:flex flex-col items-center gap-3 w-[295px] h-[298px] rounded-[20px] bg-[#F0EEED]">
          <Image
            src="/arrival4.png"
            alt="Sleeve Striped T-Shirt"
            width={295}
            height={298}
            className="rounded-[20px]"
          />
          <h2 className="capitalize text-center font-satoshi text-[18px] font-bold leading-[27px]">
            Sleeve Striped T-Shirt
          </h2>
          <Image
            src="/stars.png"
            alt="Rating Stars"
            width={150}
            height={19}
            className="w-[150px]"
          />
          <p className="text-2xl font-bold">$130</p>
        </div>
      </div>

      {/* View All Button */}
      <div className="md:mt-[150px]">
        <button className="w-[358px] h-[46px] md:w-[295px] md:h-[52px] rounded-[62px] py-4 px-[54px] hover:bg-gray-200 flex items-center justify-center">
          View All
        </button>
      </div>
    </div>
  );
}
