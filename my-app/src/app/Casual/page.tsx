import Head from 'next/head';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/footer';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  name: string;
  price: number;
  image: string;
}

export default function Casual() {
  const products: Product[] = [
    { name: 'Gradient Graphic T-shirt', price: 45, image: '/shirt2.png' },
    { name: 'Polo with Tipping Details', price: 180, image: '/shirt3.png' },
    { name: 'Black Striped T-shirt', price: 120, image: '/shirt4.png' },
    { name: 'Skinny Fit Jeans', price: 240, image: '/arrival2.png' },
    { name: 'Checkered Shirt', price: 180, image: '/arrival3.png' },
    { name: 'Sleeve Striped T-shirt', price: 130, image: '/arrival4.png' },
    { name: 'Vertical Striped Shirt', price: 212, image: '/image7.png' },
    { name: 'Courage Graphic T-shirt', price: 145, image: '/image8.png' },
    { name: 'Loose Fit Bermuda Shorts', price: 80, image: '/image9.png' },
  ];

  return (
    <>
      <Navbar />
      <Head>
        <title>Casual Products</title>
      </Head>
      <div className="flex min-h-screen bg-gray-100">
        {/* Filters Sidebar */}
        <aside className="w-1/4 bg-white p-6 border-r border-gray-300">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Category</h3>
            <ul>
              <li className="mb-2">
                <Link href="/products?category=T-shirts">T-shirts</Link>
              </li>
              <li className="mb-2">
                <Link href="/products?category=Jeans">Jeans</Link>
              </li>
              <li className="mb-2">
                <Link href="/products?category=Shirts">Shirts</Link>
              </li>
            </ul>
          </div>

          {/* Price Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Price</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/products?minPrice=0&maxPrice=50">$0 - $50</Link>
              <Link href="/products?minPrice=50&maxPrice=150">$50 - $150</Link>
              <Link href="/products?minPrice=150&maxPrice=300">$150 - $300</Link>
            </div>
          </div>

          {/* Color Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Colors</h3>
            <div className="grid grid-cols-6 gap-2">
              {['red', 'yellow', 'green', 'blue', 'black', 'pink'].map((color) => (
                <Link
                  href={`/products?color=${color}`}
                  key={color}
                  className={`w-6 h-6 rounded-full bg-${color}-500 border border-gray-300`}
                />
              ))}
            </div>
          </div>

          {/* Size Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Size</h3>
            <div className="flex space-x-2">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <Link
                  href={`/products?size=${size}`}
                  key={size}
                  className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-200"
                >
                  {size}
                </Link>
              ))}
            </div>
          </div>

          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Apply Filter
          </button>
        </aside>

        {/* Product Grid */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold mb-6">Casual</h1>
          <div className="grid grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded shadow hover:shadow-lg transition"
              >
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded"
                  />
                </div>
                <h2 className="text-sm font-medium">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
