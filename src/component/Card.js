import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CenterFocusStrong } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height:'400px',
    justifyContent:'center',
    position:'relative'
  },
  media: {
    height: 140,
    backgroundSize: 'contain',
  },
  button:{
  width:'100%',
  bottom:1  ,
  position:'absolute',
  },
  cardaction:{
      padding:0,
  }
});

const CardList = (props) => {
  const classes = useStyles();
  console.log("ccccc",props);
const {data:{name,image,description}} = props;
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardaction}>
        <Button component ={Link}  to = {`/product/${props.data._id}`} 
        className ={classes.button} variant ='contained'
         size="large" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )}
  export default CardList;