import { useBudget } from "../../context/BudgetContext";
import FakeStoreCard from "./FakeStoreCard";

export default function FakeStoreList() {
  const { products, budgetMode } = useBudget();

  const visibleProducts = budgetMode ? products.filter((p) => p.price <= 30) : products;

  console.log("BudgetMode:", budgetMode);
  console.log("Visible products:", visibleProducts.length);

  return (
    <div>
      <h1>Prodotti</h1>
      
      <div className="fakestore-list">
        {visibleProducts.map((product) => (
          <FakeStoreCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
