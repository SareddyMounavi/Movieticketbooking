import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Button, Box } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

let Home = () => {
  let navigate = useNavigate();

  let goToHome = () => {
    navigate('/');
  };

  let goToContact = () => {
    navigate('/Contact');
  };

  let goToTrailers = () => {
    navigate('/Gcards');
  };

  let goToBooking = () => {
    navigate('/Bujji');
  };

  return (
    <div>
    <div>
      <header>
        <nav style={{backgroundColor:'blue'}}>
          <Box display="flex" alignItems="center">
            <Avatar sx={{ bgcolor: deepOrange[500] }}>CT</Avatar>
            <h1>CineTick</h1>
            <Button variant="contained" style={{color:"white",width:"7cm",marginLeft:"3cm"}} onClick={goToBooking}>Book a Movie</Button>
            <Button href="/Gcards" variant="contained" style={{color:"white",width:"5cm",marginLeft:"3cm",marginRight:"5px"}} >Trailers</Button>

            <Button style={{color:"white",width:"5cm",marginLeft:'3px',marginRight:"1px",backgroundColor:"deeppink"}} onClick={goToContact}>Contact</Button>
          </Box>
        </nav>
      </header>
      <div className="h">
        <h1 style={{textAlign:'center',color:'deeppink'}}>Welcome to the CineTick</h1>
        <h4 style={{textAlign:'center',color:"deepskyblue"}}>The only one safest platform to book your movie tickets</h4>
      </div>
    
    

    </div>

    <div>
        <h1>Available Movies</h1>
    <div style={{ display: 'flex' }}>
        
      <Card sx={{ maxWidth: 345, border: '1px solid #ccc', margin: '0 10px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image="https://tse1.mm.bing.net/th?id=OIF.rdj8n%2f%2bPPOUVNwTTCHt8%2fA&pid=Api&P=0&h=180"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Adipurush
          </Typography>
          <h4>Director: "Om Raut"</h4>
          <Typography variant="body2" color="text.secondary">
            The film stars Prabhas, Kriti Sanon, Saif Ali Khan, Sunny Singh, and Devdatta Nage
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={goToBooking}>Book a Movie</Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 345, border: '1px solid #ccc', margin: '0 10px' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image="https://tse4.mm.bing.net/th?id=OIP.DIVtSFE1MYusKaREURsrmwHaEV&pid=Api&P=0&h=180"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
          VeeraSimhaReddy 
          </Typography>
          <h4>Director: "Gopichand Malineni"</h4>
          <Typography variant="body2" color="text.secondary">
          It stars Nandamuri Balakrishna in a dual role along with Shruti Haasan, Varalaxmi Sarathkumar, Honey Rose, and Duniya Vijay. 
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={goToBooking}>Book a Movie</Button>
        </CardActions>
      </Card>
    </div>
    </div>

    </div>
  );
};

export default Home;
