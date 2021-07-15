import React  from 'react';
import Maiz from '../src/images/arroz-maiz.jpg';
import Mangu from '../src/images/mangu.jpg';
import Ensalada from '../src/images/ensaladaMixta.jpg';
import EnsaladaCodito from '../src/images/EnsaladaCoditos.jpg';
import Pollo from '../src/images/pollo.jpg';
import Frito from '../src/images/frito.jpg';

// bebidas
import Lechoza from '../src/images/lechoza.jpg';
import Naranja from '../src/images/naranja.jpg';
import Tizana from '../src/images//tizada.jpg';
import Soñando from '../src/images/mori-soñando.jpg';
import Presidente from '../src/images/presidente.png';
import Wisky from '../src/images/wyski.jpg';
import Footer from './Footer';


const Menu = () => {
    return ( 

        <>
   
        <h2 className="galeria" >Galeria de Platos</h2>

        <div className="">
            
     


        <img src={Maiz} className="efectoMenu tamaño" alt="imagenfondo" />
        

        <img src={Mangu} className="efectoMenu tamaño"  alt="imagenfondo" />

        <img src={Ensalada} className="efectoMenu tamaño"  alt="imagenfondo" />

        <img src={EnsaladaCodito} className="efectoMenu tamaño"  alt="imagenfondo" />

        <img src={Pollo} className="efectoMenu tamaño"  alt="imagenfondo" />

        <img src={Frito} className="efectoMenu tamaño"  alt="imagenfondo" />


        </div>

                  <div className="bebidas">

                    <div className="jugos">


                        <h2 className="galeria">Bebidas </h2>
                        
                  <img src={Lechoza} className="efectoMenu tamaño" alt="imagenfondo" />

                  <img src={Naranja} className="efectoMenu tamaño" alt="imagenfondo" />

                  <img src={Tizana} className="efectoMenu tamaño" alt="imagenfondo" />

                  <img src={Soñando} className="efectoMenu tamaño" alt="imagenfondo" />

                  <img src={Presidente} className="efectoMenu tamaño" alt="imagenfondo" />

                  <img src={Wisky} className="efectoMenu tamaño" alt="imagenfondo" />


                     </div>




                     </div>


            <Footer />


        </>



     );
}
 
export default Menu;