import { Naturedata } from "./Naturedata";
import { useEffect,useState } from "react";
import "./Naturegallery.css";

export default function Naturegallery({send}){
      console.log(send)

 
    const naturedata= Naturedata.map((val)=>{
           
        if(val.category.includes(send)){
            return(
                <>
                
                <img className="natureimage" src={val.img}></img>
                
                    
               
                 
                </>
            )
        }
        })
        
           
     
    return(
        <>
        <div className="container">
            <div className="box">
                
            <div className="flex">
                  <h2>{send} IMAGES</h2>
                   
                   {naturedata}
            </div>
               
            </div>
            
        </div>
          
        </>
    )
}