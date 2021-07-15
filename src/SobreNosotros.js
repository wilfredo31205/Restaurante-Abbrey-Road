import React from 'react';
import Footer from './Footer';



const Nosotros = () => {
    return ( 

        <>

        <h2 className="historia" >Nuestra Historia</h2>


        <div className="breveReseña"> {/*Contenedor de flex*/}


        <div className="Reseña">


        <p className="h410" >Restaurante Abbey Road inicio en el año 2010 en el centro de la ciudad especificamente en la Av. Maximo Gomez Esq. Jose Contreras ,Frente a Utesa 
            
            en la cual hemos tenido como  todos nuestras bajas y altas , pero siempre pensando en ti en tus mejores momentos con tu pareja , desde entonces hemos venido ampliando
            nuestro negocio con diferentes sucursales en los alrededores del gran santo domingo , en la cual tenemos mucha demanda actualmente , pero siempre confiando en ti y pensando
            en ti y en tu familia para que disfruten de los mejores placeres de la vida 
            
            
             </p>


             <h2 className="historia" >Mision</h2>

             <p className="h410" >Brindar el mejor servicio de comida en el gran santo domingo y ser lider en el mercado para seguir creciendo y seguir llevandote alegria y emocion con nuestros exquisitos platos</p>



             <h2 className="historia" >Valores de la empresa</h2>
            <p className="h410" >Honestidad , Responsabilidad y Solidaridad</p>
            


        </div>

        

     
        <div className="mapa">
    
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9000.605591605026!2d-69.91439805191311!3d18.470587254104185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x26b79a1331d664cd!2sMcDonald&#39;s!5e0!3m2!1ses-419!2sdo!4v1621405001881!5m2!1ses-419!2sdo"  className="mapa"   width="1280" height="600" style={{border:0}} allowfullscreen="" loading="lazy"></iframe>



        </div>

        </div>

        <Footer />


        </>

     );
}
 
export default Nosotros;