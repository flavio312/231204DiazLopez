import React from "react";
import CustomInput from "../atoms/Input";
import Button from "../atoms/Button";

function SearchBox(){
    return(
        <>
        <CustomInput type="text" placeholder="Buscar.."/>
        <Button caption="Buscar"/>
        </>
    );
}
export default SearchBox;