import { createContext, useState, useEffect, useContext } from "react";

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budgetMode, setBudgetMode] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <BudgetContext.Provider value={{ budgetMode, setBudgetMode, products }}>
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => useContext(BudgetContext);
