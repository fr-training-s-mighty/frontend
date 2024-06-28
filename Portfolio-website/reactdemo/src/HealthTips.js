import React, {useState}  from "react";

function HealthTips(){
    const[tips,setTips] = useState([
        'Drink Pleanty of Water',
        'Eat more fruits and veges',
        'Vote for Modi',
    ]);
    return(
        <div>
            <h2>Health Tips</h2>
            <ul>
                {tips.map((tip,index) => (
                    <li key ={index}>{tip}</li>
                ))}
            </ul>
        </div>
    );
}

export default HealthTips;