import AddForm from "../AddForm/AddForm";
import ProductList from "../ProductList/ProductList";
import StatsBlock from "../StatsBlock/StatsBlock";
import SaleForm from "../SaleForm/SaleForm";

import "./App.css";

const App = () => {
    return (
        <div className="app">
            <AddForm />
            <ProductList />
            <div className="appBottom">
                <SaleForm />
                <StatsBlock />
            </div>
        </div>
    );
};

export default App;