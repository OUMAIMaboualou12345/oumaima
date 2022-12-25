 import "./Header.css";
 import {FaSearch} from "react-icons/fa"

 import you from "../../components/img/you.jpg"
const  Header = () => {
    return ( 
        <header>
            <div >

            <img src={you} className="header-img" />


                <div className="HOP">
                    <h2><i> <big>Biennvenu 
                    chez  </big></i></h2>
                    
                    <p> <i><strong>nous services</strong></i></p>
        

                    <form className="header-from">
                        <input type="text" placeholder="Search ..."  className="input"  />
                        
                        <button > <FaSearch /> </button>
                    </form>
                    <div className="pop">
                        <button>s'inscrerez</button>
                    </div>                    
               </div>
            </div>
        </header> 



    
      
    
          
    
   




      

      
       
     );
}
 
export default Header;