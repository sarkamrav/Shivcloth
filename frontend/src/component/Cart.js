import React,{useState} from 'react'
import products from '../products'
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import {Card,CardMedia,ListItem,List,ListItemText,Typography,Divider,Button,Select,MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gridGap: theme.spacing(3),
    },
    Image :{
        objectFit:'cover',
        width:'100%',
        width:"100%"
    }
}));

const Cart = ()=> {
    const classes = useStyles();
    const [cartItems] =useState([
        {
          _id: '1',
          name: 'Airpods Wireless Bluetooth Headphones',
          image: '/images/airpods.jpg',
          description:
            'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
          brand: 'Apple',
          category: 'Electronics',
          price: 89.99,
          countInStock: 10,
          rating: 4.5,
          numReviews: 12,
        },
        ])
    console.log("props.params",location.search.split('=')[1]);
    return (
        <div>
            <Grid container spacing ={3}>
                <Grid items lg ={8}>
                <Grid container >
               
                    {cartItems.map(cartdata =>{
                    return   (  
                        <>  
                         <List>
                         <ListItem>
                                <Grid item lg ={2} style = {{marginRight:'2%'}}>
                                   
                                                <ListItemText>
                                                    <img className={classes.Image} src ={cartdata.image} />
                                                </ListItemText>
                                         
                                   
                                </Grid>
                           <Grid item lg ={4} style = {{marginRight:'3%'}}>
            
                                                <ListItemText>
                                                {cartdata.name}
                                                </ListItemText>
                                        
                      
                           </Grid>
                           <Grid item lg ={2}>
            
            <ListItemText>
            {cartdata.price}
            </ListItemText>
            
    

</Grid>
<Grid item lg ={3}>
            
            <ListItemText>
            <Select >
      {[...Array(cartdata.countInStock).keys()].map(data=><MenuItem  value={data+1}>{data+1}</MenuItem>)}
      </Select>
            </ListItemText>
            
    

</Grid>
<Grid item lg ={2}>
            
            <ListItemText>
<DeleteIcon />            
            </ListItemText>
            
    

</Grid>
                           </ListItem>
                           </List>
                           </>
                      )
                    })}
                        
                         </Grid>
                </Grid>
                <Grid items lg ={4}>
                    <h1>ssss</h1>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cart;