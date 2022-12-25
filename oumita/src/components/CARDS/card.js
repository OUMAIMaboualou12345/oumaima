import React from 'react'
import  patient from "../../components/img/patient.png"
import cardiogramme from "../../components/img/cardiogramme.png"
import  injection from "../../components/img/injection.png"
import "../../components/CARDS/card.css"

export default function card() {
  return (



        <div className="main">
       <div className="container">

        <div className="card">
            <div className="imgBX">
                <img src={patient} />
            </div>
            <div className="content">
                <h2>partie1</h2>
                <p> planification des satagrs chaque semaine
                </p>
            </div>
        </div>
        <div className="card">
                     <div className="imgBX">
                         <img src={injection} />
                     </div>
                     <div className="content">
                         <h2>partie2</h2>
                         <p>l'organisation des séminaires sanitaire
                         </p>
                     </div>


        

            
       


            </div>

            
        <div className="card">
                     <div className="imgBX">
                         <img src={cardiogramme} />
                     </div>
                     <div className="content">
                         <h2>partie3</h2>
                         <p>l'accés au  milieu rurale par la réalisation des stages spécialisés
                         </p>
                     </div>

                

             </div>
          </div>






            </div>





            
  



        
           


  )
}
