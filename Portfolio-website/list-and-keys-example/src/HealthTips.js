import React from "react";

function HealthTips(){
   const tips = [
    'Drink plenty of water',
    'Eat more fruits and vegetables',
    'Start Excercise Regularly',
    'Get Enough Sleep',
    'Avoid Sugary Drinks'

]; 
    return(
        <div classname = "container mt-4">
            <h2>Health Tips </h2>
            <ul className="list-group">
                {tips.map((tip,index) => (
                    <li key={index} className="list-group-item">{tip}</li>
                ))}
            </ul>
        </div>
    )

}

export default HealthTips;