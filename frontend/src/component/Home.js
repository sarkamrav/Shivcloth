import react,{useEffect,useState,} from 'react'
import {useSelector,useDispatch} from 'react-redux';
import product from '../products'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardList from './Card';
import {fetchProduct} from '../actions/productAction'
import Loader from '../common/loader'

const useStyles = makeStyles((theme) => ({
  container: {
    margin:'0px',
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(0),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));
const Home =()=>{
  const dispatch = useDispatch();
  
  useEffect(() => {
   dispatch(fetchProduct());
  }, [dispatch]);

  const productData = useSelector(state => state.productReducer);
  console.log("productData",productData);
  return(
  <>
           <Loader/>
           <Grid container>
                {product && product.map(data=>{
                                return (
                                    <>
                <Grid  item lg={3}>
                < CardList  data ={data}/>
                </Grid>
                </>
            )
        }    )}
               
              </Grid>

 
        </>
  )
}

export default Home