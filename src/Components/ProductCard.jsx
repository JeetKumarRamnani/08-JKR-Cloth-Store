import React from 'react';
import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';

function ProductCard({ data }) {
  const { id, title, rating, price, image } = data;

  // Define the maximum length you want for the title
  const maxTitleLength = 20; // Change this to your desired length

  // Check if the title length exceeds the maximum length
  const truncatedTitle =
    title.length > maxTitleLength
      ? title.slice(0, maxTitleLength) + "..." // Truncate and add ellipsis
      : title;

  return (
    <div className="Prdouct-Card md:w-64 lg:w-72 md:p-2 rounded-lg overflow-hidden shadow-3xl">
      <div className="Product-Image w-full h-40">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="Product-Info flex flex-col gap-2 bg-[#333] p-3">
        <h2 className="Product-Title font-semibold text-xl">{truncatedTitle}</h2>
        <div className="Prodcut-Price-And-Ratting flex justify-between">
          <span className="Product-Price font-semibold text-xl text-green-500">{price}$</span>
          <span className="Product-Ratting font-semibold text-lg text-red-500">{rating.rate}</span>
        </div>
        {/* Add a Link component to navigate to the product page */}
        <Link to={`/products/${title.trim().split(" ").join("-").toLowerCase()}`}>
          <button className="w-full px-2 py-3 mt-2 bg-blue-700 font-bold rounded-md hover:bg-blue-500">
            Read More
          </button>

        </Link>
      </div>
    </div>
  );
}

export default ProductCard;
