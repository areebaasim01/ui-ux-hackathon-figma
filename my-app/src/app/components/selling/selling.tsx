

import Card from "@/app/components/cards/page";

export default function Selling() {
  return (
    <>
      <div className="flex flex-col items-center justify-center  md:mt-[100px]    object-cover mb-5">
         <h1
          className=" pt-5 font-integral text-[30px] md:text-[48px] font-bold leading-[57.6px] decoration-from-font
"
        >
          {" "}
          Top Selling
        </h1>
        <div className=" w-full h-fit flex flex-col md:flex-row items-center justify-between md:mx-[100px] gap-4 md:gap-8 mt-10">
          {/* card1 */}
          <Card
            imageUrl="/image7.png"
            h1="VERTICAL STRIPED SHIRT"
            stars="/stars.png"
            ranking="4.5/5"
            price={100}
            className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px]"
          />
          {/* card2 */}
          <Card
            imageUrl="/image8.png"
            h1="COURAGE GRAPHIC T-SHIRT"
            stars="/stars.png"
            ranking="4.5/5"
            price={145}
            className="w-[200px] h-[200px] md:w-[295px] md:h-[298px] rounded-[13.42px] md:rounded-[20px]"
          />

          {/* card3 */}
          <Card
            imageUrl="/image9.png"
            h1="LOOSE FIT BERMUDA SHORTS"
            stars="/stars.png"
            ranking="4.5/5"
            price={80}
            className=" md:block  md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED]"
          />

          {/* card4 */}
          <Card
            imageUrl="/image10.png"
            h1="FADED SKINNY JEANS"
            stars="/stars.png"
            ranking="4.5/5"
            price={210}
            className="hidden md:block  md:w-[295px] md:h-[298px] md:rounded-[20px] md:bg-[#F0EEED]"
          />
         </div>

         <button className="w-[358px] h-[46px] md:w-[295px] md:h-[52px] rounded-[62px] py-4 px-[54px] md:rounded-[20px] m-5 md:mt-36  hover:bg-gray-200 flex items-center justify-center">
          View All
         </button>
     </div>
    </>
  );
}

