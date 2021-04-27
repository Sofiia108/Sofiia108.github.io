import React, {useState} from 'react';
import {Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import {blue, green} from "@material-ui/core/colors";

function LoginForm(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmitClick() {
    }

    return (
        <div className="">
                <Grid
                    container spacing={10}
                    direction="column"
                    justify="center"
                    alignItems="center"
                >
                    <LockRoundedIcon style={{ color: "#ff8a65", fontSize: 50}}/>
                    <Box m={1}>
                        <TextField label="Email" variant="outlined" onChange={e => setEmail(e.target.value)}/>
                    </Box>
                    <Box m={1}>
                        <TextField label="Password" variant="outlined" type="password"
                                   onChange={e => setPassword(e.target.value)}/>
                    </Box>
                    <FormControlLabel
                        control={
                            <Checkbox
                                // checked={state.checkedB}
                                // onChange={handleChange}
                                color="primary"
                            />
                        }
                        label="Remember Me"
                    />
                    <Button variant="contained" style={{color: "#ff8a65"}}>
                        Submit
                    </Button>
                    <Box p={3}>
                        <Typography variant="body2">
                            Don't have an account? <Link to="/register">Register</Link>
                        </Typography>
                    </Box>
                </Grid>
        </div>
    )
}

export default LoginForm;