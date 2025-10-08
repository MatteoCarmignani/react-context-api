import { useState, useEffect } from "react";
import FakeStoreCard from "./FakeStoreCard";

export default function FakeStoreList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Prodotti</h1>
      
      <div className="fakestore-list">
        {products.map((product) => (
          <FakeStoreCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}