// InfoCard.js
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import "./InfoCard.css"
export default function InfoCard({ info }) {
  return (
    <Card className='card' sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/free-vector/watercolor-weather-effects-collection_23-2149115331.jpg"
          alt="Weather Background"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography  variant="body2" color="text.secondary" component={"span"}>
            <div className="content">
                <div>Feels Like: {info.feels_like}</div>
                <div>Humidity: {info.humidity}</div>
                <div>Temperature: {info.temp}</div>
                <div>Pressure: {info.pressure}</div>
                <div>Max Temperature: {info.temp_max}</div>
                <div>Min Temperature: {info.temp_min}</div>
                <div>Wind Speed: {info.wind_speed}</div>
                <div>Visibility: {info.visibility}</div>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
