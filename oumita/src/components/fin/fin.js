import React from 'react'

import './fin.css'

import IPS from "../../components/img/IPS.jpg"
import HEY from "../../components/img/HEY.png"
import SEXE from "../../components/img/SEXE.jpg"

export default function fin() {
  return (
    <div className='src'>
        <div className='box'>
    <img src={IPS} />
    <h2>Infirmier/ère auxiliaire</h2>
    <p>Les infirmières et infirmiers auxiliaires autorisés sont des professionnels
      autonomes qui font aujourd’hui partie intégrante de l’environnement des soins de santé. 
      Ils prodiguent des soins de haute qualité aux clients de divers milieux de soins de santé
      tels que le milieu hospitalier, celui des soins de longue durée et dans 
      la communauté, qui exigent d’eux de plus en plus un rôle de leadership
      
      </p>


      
 </div>
          

         



       <div className='box'>
    <img src={HEY}/>
    <h2>Infirmier/ère  polyvalent</h2>
    <p>L’objectif premier du programme en sciences infirmières est de former des infirmiers cliniciens généralistes capables de concevoir et de dispenser des <br/>
        soins dans divers milieux de pratiques. Il vise une formation de BAC + 3 en proposant aux étudiants d’acquérir des connaissances et de développer <br/>
        des attitudes professionnelles et des habiletés intellectuelles et cliniques</p>
     </div>


 <div className='box'>
    <img src={SEXE} />
    <h2>Aide-soignant</h2>
    <p>La formation conduisant au diplôme professionnel 
     d’aide-soignant se déroulesur une année scolaire.
    L’ensemble de la formation permet de développer 
    des apprentissages afin d’initierUne identité professionnelle Une polyvalence professionnelle
    Des valeurs professionnelles telles que l’authenticité, 
    la bienveillance, l’équité, l’humilité, le respect et la tolérance.
 </p>
 </div>

 
 </div>
  )
}
