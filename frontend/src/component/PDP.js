import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import {Card,CardMedia,ListItem,List,ListItemText,Typography,Divider,Button,Select,MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import UserRating from '../common/rating'
import {requestproductById} from '../actions/productAction'
const PDP=(props)=>{
  const dispatch = useDispatch();
    console.log("props",props.match.params.id)
    useEffect(() => {
      dispatch(requestproductById(props.match.params.id))
    }, [props.match.params.id])
    
    const productDetail = useSelector(state =>state.productReducer)
    const {product} = productDetail;
console.log("product",product);

    const {name,description,price,countInStock,rating,image}= product;
console.log("description",description);
    const [qty, setqty] =useState(1)

    const handleChange = (event) => {
      setqty(event.target.value);
    };

    const addToCart =() =>{
      props.history.push(`/cart/${props.match.params.id}?qty=${qty}`)
    }

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
        <img src ={image} />
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