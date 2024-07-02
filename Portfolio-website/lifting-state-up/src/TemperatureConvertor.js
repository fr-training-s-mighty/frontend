// this is a function
import React,{useState} from 'react';

function TemperatureConvertor(){
    const [temperature,setTemperature] = useState("");

    const handleTemperatureChange = (newTemperature) => {setTemperature(newTemperature);};

    return(
        <div className='container mt-4'>
            <h2>
                Temperature Convertor
            </h2>
        </div>
    );

}
export default TemperatureConvertor;