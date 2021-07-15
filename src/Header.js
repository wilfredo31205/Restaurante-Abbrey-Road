import React, { Fragment } from 'react';

import {Link} from 'react-router-dom';


const Header = () => {

    return (

        <>

        <div className="header hero">

        <div className="barra">

        <div className="contenedor">

        <nav className="navegacion">

            <ul>
            




            <Link to="/Inicio" className="link">Inicio</Link>

            <Link to="/menu" className="link">Menu</Link>

            <Link to="/nosotros" className="link">Nosotros</Link>
  

           
  

        
        

  
  
  













            </ul>

            </nav>

          



            </div>

            </div>

            <div className="header-contenido">

            <div className="contenedor">


            <h1 className="bienvenido" >Restaurante Abbey Road </h1>

            <p>De todos para tus Gustos</p>



            </div>

    



            </div>




            </div>

        

         

            <div className="nosotros">



            </div>



           













        </>



 




    );
}

export default Header;

