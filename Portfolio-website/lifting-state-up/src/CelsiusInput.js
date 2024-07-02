import React from 'react';

function CelsiusInput({temperature,onTemperatureChange}){
    const handleChange = (event) => { 
        onTemperatureChange(event.target.value);
    };

    return(
        <div className='form-group'>
            <label>
                Temperature in celsius:
                <input type="number" className='form-control' value={temperature} onChange={handleChange}/>
            </label>
        </div>
    );
}
export default CelsiusInput;