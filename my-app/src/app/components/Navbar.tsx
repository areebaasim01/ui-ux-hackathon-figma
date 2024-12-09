import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div>
            {/* Top Notification Bar */}
            <div className="bg-black w-full h-[38px] flex items-center justify-between px-4">
                {/* Text Section */}
                <p className="text-white text-sm ml-[544px]">
                    Sign up and get 20% off your first order.{' '}
                    <span className="underline font-bold">Sign Up Now</span>
                </p>
                {/* Image Section */}
                <div className="w-[20px] h-[20px] mr-[80px] flex items-center justify-center">
                    <Image
                        src="/Vector1.png"
                        alt="Vector"
                        width={13.3}
                        height={13.13}
                        className="object-contain"
                    />
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className="bg-white w-[1240px] ml-[50px] gap-[40px] h-[60px] flex items-center justify-between px-8 ">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/SHOP.CO.png"
                            alt="Shop.co Logo"
                            width={160}
                            height={22}
                        />
                    </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex relative group">
                    <Link href="/" className="text-black text-sm hover:underline flex items-center">
                        Shop
                        <Image
                            src="/Vector.png"
                            alt="Dropdown Arrow"
                            height={6.5}
                            width={11.5}
                            className="ml-1"
                        />
                    </Link>

                    <div>
                        {/* Dropdown Menu */}
                        <div className="relative group">
                            <Link href="/Men" className="hidden block px-4 py-2 text-sm text-black hover:bg-gray-100">
                                Men
                            </Link>
                            <div className="absolute left-0 mt-2 hidden w-40 bg-white shadow-md rounded group-hover:block">
                                <Link href="/Tshirts" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                                    T-shirts
                                </Link>
                                <Link href="/Casual" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                                    Casual
                                </Link>
                                <Link href="#Accessories" className="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                                    Accessories
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <Link href="/on-sale" className="text-black text-sm hover:underline">On Sale</Link>
                <Link href="#newArrivals" className="text-black text-sm hover:underline">New Arrivals</Link>
                <Link href="/brands" className="text-black text-sm hover:underline">Brands</Link>

                {/* Search Bar or Additional Icons */}
                <div id="inputmain" className="flex items-center bg-[#F0F0F0] justify-center gap-3 rounded-full pl-1">
                    <div id="input1">
                        <Image
                            src="/searchicon.png"
                            alt=""
                            height={24}
                            width={24}
                        />
                    </div>
                    <input
                        placeholder=" search for products..."
                        id="input"
                        className="bg-[#F0F0F0] w-[450px] h-[48px] rounded-r-full"
                    />
                </div>

                {/* Right Section: Icons */}
                <div className="flex items-center gap-[10px] ">
                    {/* First Icon */}
                    <div className="w-6 h-6">
                        <Image
                            src="/Frame1.png"
                            alt="Icon 1"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </div>

                    {/* Second Icon */}
                    <div className="w-6 h-6">
                        <Image
                            src="/Frame2.png"
                            alt="Icon 2"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
