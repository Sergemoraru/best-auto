import Image from "next/image";

const products = [
  {
    id: 1,
    name: "2013 Hyundai Elantra Limited",
    category: "Sedan",
    href: "#",
    price: "$5,500",
    imageSrc: "/ALL CARS/2013 Hyundai Elantra/Front.jpg",
    imageAlt: "2013 Hyundai Elantra Limited",
  },
  {
    id: 2,
    name: "2012 Honda Civic LX",
    category: "Sedan",
    href: "#",
    price: "$8,500",
    imageSrc: "/ALL CARS/2012 Honda Civic/Front.jpeg",
    imageAlt: "2012 Honda Civic LX",
  },
  {
    id: 3,
    name: "2013 Toyota Tundra XSP-X",
    category: "Truck",
    href: "#",
    price: "$8,500",
    imageSrc: "/ALL CARS/2013 Toyota Tundra/Front.jpeg",
    imageAlt: "2013 Toyota Tundra XSP-X",
  },
  {
    id: 4,
    name: "2008 Honda Civic LX",
    category: "Coupe",
    href: "#",
    price: "$5,100",
    imageSrc: "/ALL CARS/2008 Honda Civic/Front.jpeg",
    imageAlt: "2013 Hyundai Elantra Limited",
  },
  // More products...
];

export default function SoldRecent() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="flex items-center justify-between space-x-4">
          <h1 className="text-lg font-medium text-zinc-700">Sold Cars</h1>
          <a
            href="./sold"
            className="whitespace-nowrap text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            View all
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                <Image
                  width={250}
                  height={100}
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center"
                />
                <div
                  className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                    View details
                  </div>
                </div>
              </div>                                                                                
              <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </a>
                </h3>
                <p>{product.price}</p>
              </div>
              <p className="mt-1 text-sm text-gray-500">{product.category}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
