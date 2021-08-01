import React,{useState,useEffect} from 'react'
// import products from '../products'
import {useSelector,useDispatch} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import {Card,CardMedia,ListItem,List,ListItemText,Typography,Divider,Button,Select,MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { combineReducers } from 'redux';
import {addToCart} from '../actions/cartAction'
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

const Cart = (props)=> {
    const classes = useStyles();
    const dispatch = useDispatch();
    const id = props.match.params.id;
    const quantity = location.search.split('=')[1];

    useEffect(()=>{
        dispatch(addToCart(id,quantity))
    },[dispatch,id,quantity])

      const cartItems = useSelector(state=>state.cartReducer.cartItems);
      console.log("cartItems",cartItems);
    //   const{name,image,quantity} = cartItems
    return (
        <div>
               <Grid container spacing ={3}>
                <Grid items lg ={8}>
                <Grid container >
               
                {cartItems &&  (cartItems.length>0) && cartItems.map(cartdata=>{
                    return (  
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
            <Select  value ={cartdata.quantity}>
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
                           <Divider variant="middle" component="h1" />
                           </List>
                           </>
                      )
                    })}
                    
                        
                         </Grid>
                         
                </Grid>
             
                <Grid items lg ={4}>
                    {/* <h1>ssss</h1> */}
                </Grid>
            </Grid> 
          
            
           
        </div>
    )
}

export default Cart;