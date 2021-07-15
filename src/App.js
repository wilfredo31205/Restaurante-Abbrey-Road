
import React from 'react';
import Header from '../src/Header';
import SobreNosotros from '../src/SobreNosotros';

import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import Menu from './Menu';
import Inicio from './Inicio';



const App = () => {
    return (

        <Router>

            <div>

            <Header />

       
        <Switch>

        <Route exact path="/Inicio" component={Inicio} />
        <Route exact path="/nosotros" component={SobreNosotros} />
        <Route exact path="/menu" component={Menu} />
        
        {/*<Route exact path="/nosotros" component={SobreNosotros} />*/}

        


        </Switch>



        </div>



        </Router>










    );
}

export default App;