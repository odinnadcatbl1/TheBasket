import AddForm from "../AddForm/AddForm";
import ProductList from "../ProductList/ProductList";

import "./App.css";

const App = () => {
    return (
        <div className="app">
            <AddForm />
            <ProductList />
        </div>
    );
};

export default App;