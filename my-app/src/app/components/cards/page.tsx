import Image from "next/image";

export interface CardProps {
  imageUrl: string;
  title: string;
  starsUrl: string;
  price: number;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ imageUrl, title, starsUrl, price, className = "" }) => {
  return (
    <div className={`w-[296px] h-auto flex flex-col gap-5 p-4 rounded-lg shadow-md ${className} bg-white`}>
      {/* Product Image */}
      <Image
        src={imageUrl}
        alt="Product image"
        width={295}
        height={298}
        className="w-full h-[298px] rounded-lg object-cover"
      />

      {/* Product Title */}
      <h1 className="text-lg font-bold text-center capitalize truncate">{title}</h1>

      {/* Rating */}
      <div className="flex items-center justify-center">
        <Image src={starsUrl} alt="Rating stars" width={150} height={19} className="w-[150px] h-[19px]" />
      </div>

      {/* Price */}
      <p className="text-xl font-semibold text-center text-black">${price}</p>
    </div>
  );
};


export default Card;