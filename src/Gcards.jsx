import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Gcards() {
  return (
    <div>
    <h1 style={{textAlign:"center"}}> Movie Trailers By CineTick </h1>
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Typography gutterBottom variant="h4" component="div" paddingLeft={'1cm'}>
          Adhipurush 
          </Typography>
        <Grid item xs={12}>
          <Item>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/8tea0uI4d2A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </Item>
        </Grid>
        <Typography gutterBottom variant="h4" component="div" paddingLeft={"1cm"}>
          VeeraSimhaReddy 
          </Typography>
        <Grid item xs={12}>
          <Item>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/XUdcXkvYJs0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </Item>
        </Grid>
        <Typography gutterBottom variant="h4" component="div" paddingLeft={"1cm"}>
          Nenu Student Sir 
          </Typography>
        <Grid item xs={12}>
          <Item>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_v6jZV3oTT8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </Item>
        </Grid>
        <Typography gutterBottom variant="h4" component="div" paddingLeft={"1cm"}>
          Gudachari 2 
          </Typography>
        <Grid item xs={12}>
          <Item>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/snx398zoixA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>          </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
