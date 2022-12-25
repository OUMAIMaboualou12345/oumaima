import React from 'react';
import './Home.css'
import informations from "../../components/img/informations.png"
import temps from "../../components/img/temps.jpg"
import depist from "../../components/img/depist.jpg"


import {MdLocalPostOffice}from "react-icons/md"
import {BsFillFileEarmarkCodeFill , BsTelephonePlusFill} from "react-icons/bs"

 function Home ()  {
  return (
    
        <div className='card' >
          <div className='cardcontainer'>
          <div>
            <img src={informations} />
            </div>
            <div >
             <h1>Informations</h1>
            <p>           <i> <BsTelephonePlusFill /> Téléphone :</i>+212 5287-70877<br/>
                          <i><MdLocalPostOffice />Adresse :</i>

                          Bd El Mehdi Bnou Toumert, Guelmim<br/>
                           
                          <i> <BsFillFileEarmarkCodeFill />Code Postal : </i>81000</p>
                          </div>
          </div>

          <div className='cardcontainer'>
          <div>
          <img src={temps} />
          </div>
          <div>
           <h1> Heures d’ouvertu</h1>

            <p>LUNDI
 08:00–18:00
MARDI
08:00–18:00
MERCREDI
08:00–18:00
JEUDI
08:00–18:00
VENDREDI
08:00–18:00
SAMEDI
08:00–12:00
DIMANCHE

Fermé</p>
</div>
          </div>
          

          <div className='cardcontainer'>
          <div>
            <img src={depist}  alt="" />
          </div>
           
           <div>
              <h1>Services</h1>
            <p>Institut de formation en soins infirmiers formation,<br />
             Tan-Tan, Guelmim-Es Smara</p>
           
          </div>
          </div>
        </div> 
        
       

       
       
      

    
  )
}
export default Home;
