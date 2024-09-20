import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from 'react';
import { colors } from '@mui/material';
import { red } from '@mui/material/colors';
export default function SearchBox({updateInfo}){
        let [city , setCity] = useState("");
    let [error, seterror] =useState(false);
    const API_URL ="https://api.openweathermap.org/data/2.5/weather"
    const API_KAY ="71e93f356a3a8e78d50702772b2a2821"
let getWeatherinfo = async()=>{
    try{
        let response = await fetch(`${API_URL}?q=${city
    } &appid=${API_KAY}`);
    let jesonresponse = await response.json();
    console.log(jesonresponse);
    let result  = {
        city:city,
        temp:jesonresponse.main.temp,
        tempMax: jesonresponse.main.temp_max,
        tempMin: jesonresponse.main.temp_min,

        humidity:jesonresponse.main.humidity,
        feelsLike:jesonresponse.main.feels_like,
        weather:jesonresponse.weather[0].description};
        console.log(result);
        return result;

    } catch(err){ seterror(" No Such City found in this api!! ")}

    };


    let handleChenge = (evt)=>{
        setCity(evt.target.value);
    };
let handleSubmit =async(evt)=>{try{

    evt.preventDefault();
    console.log(city);
    setCity("");

    let newinfo =await getWeatherinfo();
    updateInfo(newinfo);
}catch(err){seterror(true)}



}
return(
<>

<div className='SearchBox'>

    <h3>Today Current  City Weather INFO :)</h3>
<form onSubmit={handleSubmit}>

  <TextField id="City" label="City Name" variant="outlined" value={city} required="String" onChange={handleChenge} /> <br /><br />
<button class="custom-button"><span>Click Here </span></button>

{error&& <p style={{color:"red"}}>Not City found </p>}

</form></div>
        </>)

}
