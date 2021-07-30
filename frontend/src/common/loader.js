import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: theme.spacing(2),
        // position: 'absolute',
        // width: '100%',
        // height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        // zIndex: 1,
        // display: 'flex',
        // textAlign: 'center',
        // background: 'lightgray',
    },
  }));

const Loader = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <CircularProgress />
      </div>
    );
  }

  export default Loader;