import "./Contact.css"
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { send } from "../../Slice";
const Contact = () => {

  const [name, setName] = useState("");
 

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
      e.preventDefault();

      dispatch(send({
          name : name,
      }));
  }

  
  return (



  <div className="contact-container" id="contact">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
          <div className="topic">Address</div>
          <div className="text-one">geulmim</div>
          <div className="text-two"> Bd El Mehdi Bnou Toumert, Guelmim</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">télephone</div>
          <div className="text-one">05 58024669</div>
          <div className="text-two">0658389484</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">ERRAZI@gmail.com</div>
          <div className="text-two">errazi paramédicale@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Contact Nous</div>
        <p>quand tu veut envoyée u  message il est posssible de entrer les informatins suivantes au contact</p>
      <form className="contact-forms" onSubmit={(e) => handleSubmit(e)}>
        <div class="input-box">
          <input type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box">
        <input type="text" placeholder="Enter your message"/>
        </div>
        <div className="button">
          <button type="submit" >Envoyer</button>
        </div>
      </form>
    </div>
    </div>
  </div>


  )
}

export default Contact