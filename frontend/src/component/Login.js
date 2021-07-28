import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
const Login = () => {

    const [signUp, setSignUp] = useState(false);

    const paperStyle={padding :30,height:'50vh',width:'20vw', margin:"20px auto"};
    const avatarStyle={backgroundColor:'#1bbd7e'};
    const btnstyle= signUp ? {margin:'30px 0'}: {margin:'8px 0'};

    return(
        signUp ? (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign Up</h2>
                    </Grid>
                    <TextField label='firstname' placeholder='Enter firstname' fullWidth required/>
                    <TextField label='secondname' placeholder='Enter secondname' fullWidth required/>
                    <TextField label='Email' placeholder='Enter email' fullWidth required/>
                    <TextField label='Username' placeholder='Enter username' fullWidth required/>
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                    
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
                </Paper>
            </Grid>
        ) : (
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter username' fullWidth required/>
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Remember me"
                    />
                    <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign In</Button>
                    <Typography >
                        <Link href="#" >
                            Forgot password?
                    </Link>
                    </Typography>
                    <Typography > Do you have an account?
                        <Link href="#" onClick={() => setSignUp(true)} >
                            Sign Up 
                    </Link>
                    </Typography>
                </Paper>
            </Grid>
        )
    )
}

export default Login;