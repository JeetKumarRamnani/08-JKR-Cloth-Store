import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();


        // Use find to search for a product with a matching title (slug)
        const dataFound = data.find((product) => {
        const firstWord = product.title.split(" ")[0].toLowerCase();    
        const slugFirstWord = slug.split("-").join(" ").split(" ")[0]

          return slugFirstWord === firstWord;

        });
    

        if (dataFound) {
          setProduct(dataFound);
        } else {
          console.log("Product not found");
        }
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    }

    fetchData();
  }, [slug]);

  console.log(slug);
  console.log(product); // This will show the fetched product data
  const {title,image,description,price,rating} = product;
  try{
  const {rate,count} = rating;
  console.log(rate,count)
}catch(e){
    console.log("Error" + e)
}
    return (
    <div className="container mx-auto p-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="md:col-span-1">
        <img src={image} alt={title} className="w-full" />
      </div>
      <div className="md:col-span-1">
        <h1 className="text-3xl font-semibold mb-4">{title}</h1>
        <p className="text-gray-600 text-lg mb-4">{description}</p>
        <p className="text-green-600 text-2xl font-semibold">${price}</p>
        <div className="flex items-center mt-4">
  <span className="text-yellow-500 text-lg">Rating:</span>
  {product.rating && product.rating.rate ? (
    <span className="text-yellow-500 ml-1">{product.rating.rate}</span>
  ) : (
    <span className="ml-1">Loading....</span>
  )}
</div>

      </div>
    </div>
  </div>
  );
}

export default ProductDetails;
