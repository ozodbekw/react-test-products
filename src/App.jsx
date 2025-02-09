import React from "react";
import { useState } from "react";
import Title from "./components/Title";
import Product from "./components/Product";
import { useFetch } from "./hooks/useFetch";
import './app.css'

function App() {
  // const data = useFetch("https://cdn.dummyjson.com/products");
  // console.log(data && data);
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
      category: "beauty",
      price: 19.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png",
      ],
    },
    {
      id: 3,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "beauty",
      price: 1.9,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
    },
    {
      id: 4,
      title: "Eyeshadow Palette with Mirror",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus suscipit cumque velit dicta in ex ipsa voluptas obcaecati? Perspiciatis dolores laudantium vitae, provident architecto quo nostrum cum quas dolore?",
      category: "beauty",
      price: 4.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
    },
    {
      id: 5,
      title: "Eyeshadow Palette with Mirror",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolorem, aut magnam iure fugit dolore suscipit tempore nemo sed, non voluptatibus possimus provident quae natus laudantium dicta molestias tenetur! Impedit, in. Sed!",
      category: "beauty",
      price: 1.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
    },
    {
      id: 6,
      title: "Eyeshadow Palette with Mirror",
      description:
        "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
      category: "beauty",
      price: 17.99,
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png",
      ],
    },
  ]);

  const deleteBtn = (id) => {
    setProducts(products.filter((product) => product.id != id));
  };

  return (
    <div>
      <h1>Products</h1>

      {<Title products={products} />}
      <ul className="products-container">
        {products.map((product, index, arr) => {
          return (
            <Product  product={product} key={product.id} deleteBtn={deleteBtn} />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
