
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import "./InfoBox.css";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
export default function InfoBox({info}){
    const inurl ="https://media.istockphoto.com/id/1354866149/photo/live-news-studio-professional-anchor-reporting-on-weather-forecast-weatherman-meteorologist.webp?b=1&s=170667a&w=0&k=20&c=32nKRZ6D_yU8nJcuKM-RVoNWNm8hwIOcYy_VXwO6lWo="

    return(<>
<div className="infoBox">

    <div className='Card'>
<div class="card">
  <div class="container">
    <div class="cloud front">
      <span class="left-front"></span>
      <span class="right-front"></span>
    </div>
    <span class="sun sunshine"></span>
    <span class="sun"></span>
    <div class="cloud back">
      <span class="left-back"></span>
      <span class="right-back"></span>
    </div>
  </div>

  <div class="card-header">
    <span>    {info.city}</span>



<span>
    Today</span>
  </div>

  <span class="temp"><p> {parseFloat((info.temp- 273).toFixed(2))}&deg;  C</p>
</span>

  <div class="temp-scale">
    <span>Celcius</span>

  </div><br />
    <p>The Weather can Describe as <i>{info.weather} </i>and Feels like {info.feelsLike} K</p>
<br /><br />
    <span>humidity <i>{info.humidity}</i></span>

<p>Min Temp = {parseFloat((info.tempMin - 273).toFixed(2))}&deg; C</p>

        <p>Max Temp = {parseFloat((info.tempMax - 273).toFixed(2))}&deg; C</p> <br />

</div>

</div>
</div>

    </>);
}
