import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./contexts/ProductsContext.jsx";
import { FilterContextProvider } from "./contexts/FilterContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </DataProvider>
);
