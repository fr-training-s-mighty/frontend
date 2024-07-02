// this is a function
import React,{useState} from 'react';
import CelsiusInput from './CelsiusInput';
import FahrenheitDisplay from './FahrenheitDisplay';

function TemperatureConvertor(){
    const [temperature,setTemperature] = useState("");

    const handleTemperatureChange = (newTemperature) => {setTemperature(newTemperature);};

    return(
        <div className='container mt-4'>
            <h2>
                Temperature Convertor
            </h2>
            <CelsiusInput temperature={temperature} onTemperatureChange={handleTemperatureChange}/>
            <FahrenheitDisplay temperature={temperature}/>
        </div>
    );

}
export default TemperatureConvertor;