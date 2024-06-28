import React, {useState}  from "react";

function HealthTips(){
    const[tips,setTips] = useState([
        'Drink Pleanty of Water',
        'Eat more fruits and veges',
        'Vote for Modi',
    ]);
    return(
        <div className="container mt-4">
            <h2>Health Tips</h2>
            <ul className="list-group">
                {tips.map((tip,index) => (
                    <li key ={index} className="list-group-item">{tip}</li>
                ))}
            </ul>
        </div>
    );
}

export default HealthTips;