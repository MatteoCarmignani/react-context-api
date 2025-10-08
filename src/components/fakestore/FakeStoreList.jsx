import { useState, useEffect } from "react";
import FakeStoreCard from "./FakeStoreCard";

export default function FakeStoreList() {
  const [products, setProducts] = useState([]);

  

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