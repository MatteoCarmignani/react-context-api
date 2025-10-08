// import della parte di componenti di navigazione per routing
import { NavLink } from "react-router-dom";
import { useBudget } from "../context/BudgetContext";

function Navbar() {
  const { budgetMode, setBudgetMode } = useBudget();
    
  return (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home Page</NavLink>
            </li>
            <li>
                <NavLink to="/about">Chi siamo</NavLink>
            </li>
            <li>
                <NavLink to="/product">I nostri Prodotti</NavLink>
            </li>

            </ul>
      <button onClick={() => setBudgetMode(!budgetMode)}>
        {budgetMode ? "Disattiva Modalità Budget" : "Attiva Modalità Budget"}
      </button>
    </nav>
  );
}

export default Navbar;
