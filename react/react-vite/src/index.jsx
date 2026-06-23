import "./style.css";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ProductLayout } from "./components/ProductLayout";
import Herosection from "./components/Herosection";

const ApplicationLayout= () => {
    return (
        <>
        <Header />
        <Herosection />
        <ProductLayout />
        <Footer />
        </>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ApplicationLayout/>);
