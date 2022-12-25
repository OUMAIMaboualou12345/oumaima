import React from 'react'
import  "../About/About.css"
import img1 from "../../components/img/img1.jpg";


export default function About() {
  return (
       
    <div className='HEY ' id='ouma' >
         
       <h2><i><strong>A propos </strong> </i></h2>
        
    

          <div className='nice' id="nice">

            
        
            <img  src={img1} alt='' />
            
            <div className="text">
              
              <p>La formation à l’Ecole de Santé et de Formation Paramédicale 
              Privée<br /> a pour objectif d’amener l’étudiant à se construire une identité <br />professionnelle forte afin qu’il puisse devenir un acteur proactif<br />
              du système de santé de demain. Au terme de sa formation il aura<br />
              développé etexercé les compétences   fondamentales nécessaires</p>
              <div className="YES">
                        <button>s'inscrerez</button>
                    </div> 

            </div>
          </div>
      
      
         
       
        </div>

   
    

       

      
   
  )
}
