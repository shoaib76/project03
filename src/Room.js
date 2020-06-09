import React, { useState } from "react"
import  './Room.css';




function Room() {
    let  [isLight, setisLight] = useState(false);
    let  [ Temp , setTemp ] = useState(72);
    
    return (
        <div className={`room ${isLight? "lit": "dark"}`}>
            This is Room : lit {isLight? "OFF" : "ON" }
            <br/>
            Temprature is { Temp }
            <br/>
            <button onClick= { () => setisLight(true) }>OFF</button>
            <button onClick= { () => setisLight(false) }>ON</button>
            
            <br/>
            <button onClick= { () => setTemp(++Temp) }>+</button>
            <button onClick= { () => setTemp(--Temp) }>-</button>
            
            
        </div>
    );
}

export default Room;