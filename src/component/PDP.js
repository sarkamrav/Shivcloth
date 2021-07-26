import React from 'react';
import products from '../products';
import Grid from '@material-ui/core/Grid';
import {Card,CardMedia,ListItem,List,ListItemText,Typography,Divider,Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const PDP=(props)=>{
    console.log("props",props.match.params.id)
    const filtereddata =  products && products.filter(data => data._id === props.match.params.id);
    console.log("filtereddata",filtereddata[0].image);
    const {name,description,price,countInStock}= filtereddata[0];
//     brand: "Amazon"
// category: "Electronics"
// countInStock: 0
// description: "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space"
// image: "/images/alexa.jpg"
// name: "Amazon Echo Dot 3rd Generation"
// numReviews: 12
// price: 29.99
// rating: 4

    const useStyles = makeStyles((theme) => ({
        container: {
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gridGap: theme.spacing(3),
        },
    buttonwidth:{
        width:'100%',
    }}))
    const classes = useStyles();
return(
<>
<Grid container spacing ={3}>
    <Grid item lg ={6} >
    <Card >
        {/* <CardMedia
        //   className={classes.media}
          image= {filtereddata[0].image}
          title="Contemplative Reptile"
        /> */}
        <img src ={filtereddata[0].image} />
     </Card>
    </Grid>
    <Grid item lg ={3} >
    <List >
      <ListItem alignItems="flex-start">
        <ListItemText><Typography variant="h5" >{name}</Typography></ListItemText>
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem alignItems="center">
        <ListItemText>price: {price}$</ListItemText>
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText>description:{description}</ListItemText>
      </ListItem>
    
      </List>
</Grid>
<Grid item lg ={3} >
    <List >
    <ListItem  >
        <ListItemText>price: {price}$</ListItemText>
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem >
        <ListItemText>Status:{countInStock>0 ?'In-Stock':'Out of Stock'}</ListItemText>
      </ListItem>
    <Divider variant="middle" component="li" />
      <ListItem alignItems="center">
        <Button variant ='contained' className ={classes.buttonwidth}
         size="large" color="primary" disabled ={countInStock ===0 }>Add To Cart</Button>
      </ListItem>
    </List>
</Grid>

</Grid>

</>
    )

}

export default PDP