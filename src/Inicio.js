import React from 'react';
import foto from '../src/images/mofongo.jpg';
import Sanconcho from '../src/images/sanconcho.jpg';
import Maiz from '../src/images/arroz-maiz.jpg';


import Footer from './Footer';




const Inicio = () => {
    return ( 

        <>

        





        <h1 className="h01" >Bienvenido a Abbey Road Restaurante</h1>
        <p className="p10">Tenemos todo lo que buscas para tu antojo y la de tu pareja</p>


            <div className="Menu">

            <div className="platos">


            <img src={foto} className="images" alt="imagenfondo" />

           


            <img src={Sanconcho} className="images" alt="imagenfondo" />

            <img src={Maiz} className="images"  alt="imagenfondo" />

            


         
            
                </div>

            
                </div>

                <div className="variedades">


                    <h1>Menu</h1>

                    <div className="platillos">

                    <p className="nombre">Sanconcho</p>
                    
                    <p className="precio" >$250</p>

                    <p className="descripcion" >Sancocho con un buen sabor a sazon Dominicano y picante soffason</p>


                    </div>

                    
                    
                    <div className="platillos">

                    <p className="nombre">Arroz con Maiz</p>
                    
                    <p className="precio" >$300</p>

                    <p className="descripcion" >Arroz de maiz con carne de pollo guizada y ensalada</p>


                    </div>



                                        
                    
                    <div className="platillos">

                    <p className="nombre">Mofongo</p>
                    
                    <p className="precio" >$500</p>

                    <p className="descripcion" >Exquisito mofongo con mucho sazon</p>


                    </div>











                    
                    
                    <div className="bebida">

                    <p className="nombre">Refresco coca-colca</p>
                    
                    <p className="precio" >$50</p>

                    <p className="descripcion" >Bebida coca-cola con hielo</p>


                    </div>



                        
                        <div className="bebida">

                        <p className="nombre">Jugo de Limon</p>
                        
                        <p className="precio" >$30</p>

                        <p className="descripcion" >Refrescante jugo de limon con hielo</p>
                        </div>
                        
                        
               
               
                    
                    
                    

                </div>

            
                    
               <div className="efecto">

             <h4 className="titulo" >Estamos contigo desde siempre </h4>
             <h4 className="titulo" >En los mejores momentos de tu vida </h4>

        
        
               </div>



                <div className="ubicacion">

                    <h3>Ubicacion</h3>


                    <p>Av. Maximo Gomez Esq. Jose Contreras ,Frente a Utesa</p>

                    <p>Telelefono : 00000-0000-0000-4523</p>

                    <p>Correo: AbbeyRoad125@Gmail.com</p>



                </div>

                <div className="mapa">

              
        
        
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9000.605591605026!2d-69.91439805191311!3d18.470587254104185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x26b79a1331d664cd!2sMcDonald&#39;s!5e0!3m2!1ses-419!2sdo!4v1621405001881!5m2!1ses-419!2sdo"  className="mapa"   width="1280" height="600" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>
              
              
              
              
               




                </div>


                    <Footer />
                




              




    


            </>




     );
}
 
export default Inicio;