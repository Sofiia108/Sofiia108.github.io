import React, {useState} from 'react';
import {Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography} from "@material-ui/core";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import {Link} from "react-router-dom";


function RegistrationForm(props) {

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }
    const text = "I want to receive inspiration, marketing \n promotions and updates via email"
    let newText = text.split('\n').map ((item, i) => <p key={i} style={{margin: 0}}>{item}</p>);

    function handleSubmitClick() {
    }

    return (
            <Grid
                container spacing={10}
                direction="column"
                justify="center"
                alignItems="center"
            >
                <LockRoundedIcon style={{ color: "#ff8a65", fontSize: 50}}/>
                <Box m={1} style = {{display: "flex"}}>
                    <TextField label="First Name" variant="outlined" style={{width: 108, padding: 3}} onChange={e => handleChange(e)} />
                    <TextField label="Last Name" variant="outlined" style={{width: 108, padding: 3}}onChange={e => handleChange(e)} />
                </Box>
                <Box m={1}>
                    <TextField label="Email" variant="outlined" onChange={e => handleChange(e)} />
                </Box>
                <Box m={1}>
                    <TextField label="Password" variant="outlined" type="password" onChange={e => handleChange(e)}/>
                </Box>
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={state.checkedB}
                            // onChange={handleChange}
                            color="primary"
                        />
                    }
                    label={newText}/>
                <Button variant="contained" style={{color: "#ff8a65", marginTop: 10}}>
                    Submit
                </Button>
                <Box p={2}>
                    <Typography variant="body2">
                        Already have an account?<Link to="/">Login</Link>
                    </Typography>
                </Box>
            </Grid>
            )
}

export default RegistrationForm;