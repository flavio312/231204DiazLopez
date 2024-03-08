import Header from "../molecules/Header"
import Nav from "../molecules/Nav";
import SearchBox from "../molecules/Search-box";
import Button from "../atoms/Button";
import Date from "../JS/FechaActual";
import ConsultProduct from "../molecules/ConsultProduct";
import "./Product.css"

function Products () {
    const fecha = Date();
    return(
        <>
        <Header/>
        <Nav/>
        <br />
        <div className="search-Box">
        <SearchBox/>
        </div>
        <div className="new-product-button">
        <p>{fecha}</p>
            <Button caption="Nuevo producto"/>
        </div>
        <ConsultProduct/>
        </>  
    );
};
export default Products;
