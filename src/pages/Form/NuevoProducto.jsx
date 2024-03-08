import React, { useState } from "react";
import Header from "../../components/molecules/Header";
import Nav from "../../components/molecules/Nav";
import Footer from "../../components/molecules/Footer";
import Form from "../../components/organismes/Form";

function NuevoProducto (){
    return(
        <>
            <Header/>
            <Nav/> 
            <br />
            <Form/> <br />
            <Footer/>
        </>
    );
}

export default NuevoProducto;
