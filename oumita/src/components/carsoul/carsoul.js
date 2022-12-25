
import React from 'react'
import DOC from "../../components/img/DOC.jpg";
import "../../components/carsoul/carsoul.css"
import IPS from "../../components/img/IPS.jpg"
import HEY from "../../components/img/HEY.png"
import SEXE from "../../components/img/SEXE.jpg"


export default function casoul() {
  return (
    
    <div className='h'>
        <h2>les services qui sont ouvertes</h2>
   


     



<div className="containe ">


  <div className="cardO">
  <h1>Aide soignants</h1>  
   <div className="imgbox">
     <img src={DOC} />

     <div className="content">
 
   </div>
</div>
 </div>






 <div className="cardO">
   <div className="imgbox">
   <h1>Infermiére auxiliare</h1>    

     <img src={IPS} />
   </div>
 <div className="content">
         <h1></h1>
      
 </div>

  </div>


  <div className="cardO">
   
   <div className="imgbox">
   <h1>Infermiére  polyvalante</h1>    

     <img src={SEXE} />
   </div>
 <div className="content">
        
 </div>

</div>


 
 <div className="cardO">
   <div className="imgbox">
   <h1>Soignants infermiére</h1>

     <img src={HEY} />
   </div>
 <div className="content">
       
       

 </div>
</div>


</div>





 

  </div>



  

 





        

  )
}
