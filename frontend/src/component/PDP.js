import React,{useState} from 'react';
import products from '../products';
import Grid from '@material-ui/core/Grid';
import {Card,CardMedia,ListItem,List,ListItemText,Typography,Divider,Button,Select,MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserRating from '../common/rating'
const PDP=(props)=>{
    console.log("props",props.match.params.id)
    const filtereddata =  products && products.filter(data => data._id === props.match.params.id);
    console.log("filtereddata",filtereddata[0].image);
    const {name,description,price,countInStock,rating}= filtereddata[0];

    const [qty, setqty] =useState(1)

    const handleChange = (event) => {
      setqty(event.target.value);
    };

    const addToCart =() =>{
      props.history.push(`/cart/${props.match.params.id}?qty=${qty}`)
    }
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
      <ListItem alignItems="center">
      <UserRating value ={rating} />
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
      <Typography variant="h5" >{name}</Typography>
      </ListItem>
      <Divider variant="middle" component="li" />
      <ListItem >
        <ListItemText>Status:{countInStock>0 ?'In-Stock':'Out of Stock'}</ListItemText>
      </ListItem>
      <Divider variant="middle" component="li" />
      {countInStock>0 &&
      <ListItem >
        
    <Grid container spacing ={3}>
    <Grid item lg ={8} >
      
    <ListItemText>Quantity</ListItemText>
    </Grid>
    <Grid item lg ={3} >
      <Select onChange={handleChange}     value={qty}>
      {[...Array(countInStock).keys()].map(data=><MenuItem  value={data+1}>{data+1}</MenuItem>)}
      </Select>
    </Grid>
    </Grid>
       </ListItem>
}
    <Divider variant="middle" component="li" />
      <ListItem alignItems="center">
        <Button variant ='contained' className ={classes.buttonwidth}
         size="large" color="primary" disabled ={countInStock ===0 } onClick ={addToCart}>Add To Cart</Button>
      </ListItem>
    </List>
</Grid>

</Grid>

</>
    )

}

export default PDP