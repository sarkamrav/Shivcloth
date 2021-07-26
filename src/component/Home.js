import react,{useEffect,useState} from 'react'
import product from '../products'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardList from './Card';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
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

    return(
        <>
                <Grid container spacing={3}>
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