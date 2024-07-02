import React from 'react';

function FahrenheitDisplay({temperature}){
    const fahrenheit = (temperature !== '' && !isNaN(temperature))? (parseFloat(temperature)*9/5) +32 :" ";

    return(
        <div>
            <h3>Temperature in Fahrenheit is {fahrenheit}</h3>
        </div>
    );
}

export default FahrenheitDisplay;
