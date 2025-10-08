import { Link } from "react-router-dom";

export default function FakeStoreCard({ product }) {
  return (
    <div className="fakestore-card">
      <img src={product.image} alt={product.title} />
      <p className="title">{product.title}</p>
      <p className="price">€ {product.price}</p>
      <Link to={`/product/${product.id}`} className="product-link-btn">
        Vedi Dettagli <i class="fa-solid fa-bag-shopping"></i>
      </Link>
    </div>
  );
}