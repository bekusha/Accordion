import React from "react";
import { useState } from "react";
import './Acordion.css'
import down from '../images/icon-arrow-down.svg'
const Acordion = () => {
const [show, setShow] = useState(null);


return (
    <div className="container">
      <div onClick={() => {
        if(show === 1){
          setShow(null)
        }else{
          setShow(1)
        }
      }} className="head">
        How many team members can I invite?
        <img className="down" src={down} />
        <div className="line"></div>
        {show ===1 ? (
          <div>
            <b className="secondHead">What is the maximum file upload size?</b>
            <img className="up" src={down} />
            <p>
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          </div>
        ) : (
          null
        )}
      </div>
      
      <div onClick={() => {
        if(show === 2){
          setShow(null);
        }else{
          setShow(2);
        }
      }} className="head">
        How many team members can I invite?
        <img className="down" src={down} />
        <div className="line"></div>
        {show ===2 ? (
          <div>
            <b className="secondHead">What is the maximum file upload size?</b>
            <img className="up" src={down} />
            <p>
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          </div>
        ) : (
          null
        )}
      </div>
     
      <div onClick={() => {
        if(show === 3){
          setShow(null);
        }else{
          setShow(3);
        }
      }} className="head">
      
        How many team members can I invite?
        <img className="down" src={down} />
        <div className="line"></div>
        {show === 3 ? (
          <div>
            <b className="secondHead">What is the maximum file upload size?</b>
            <img className="up" src={down} />
            <p>
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          </div>
        ) : (
         null
        )}
        
      </div>
      
      <div onClick={() => {
        if(show === 4){
          setShow(null);
        }else{
          setShow(4);
        }
      }} className="head">
        How many team members can I invite?
        
        <img className="down" src={down} />
        <div className="line"></div>
        {show === 4 ? (
          <div>
            <b className="secondHead">What is the maximum file upload size?</b>
            <img className="up" src={down} />
            <p>
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          </div>
        ) : (
          null
        )}
      </div>
      <div className="line-last"></div>
      
      
    </div>
  );
};

export default Acordion;
