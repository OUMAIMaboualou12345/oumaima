import React from 'react';
import { useDispatch } from 'react-redux';
import { returnS, selectUser } from "../../Slice";
import { useSelector} from "react-redux";
import "./Return.css"
// import "./Logout.css";

const Return = () => {
const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();

        dispatch(returnS());
    };

  return (
    <div className='return-container'>
        <h1>
          Thank you <span className='user__name'>{user.name}</span>
        </h1>
        <button className='return-button' onClick={(e) => handleLogout(e)}>Return</button>
    </div>
  )
}

export default Return