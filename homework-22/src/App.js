import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";
import {Box, Container} from "@material-ui/core";

let baseName = "";
baseName = "/homework-22/build";

function App() {
    return (
        <Router basename={baseName}>
                <Container>
                    <Box pt={20}>
                        <Switch>
                            <Route path="/register">
                                <RegistrationForm/>
                            </Route>
                            <Route path="/">
                                <LoginForm/>
                            </Route>
                        </Switch>
                    </Box>
                </Container>
        </Router>
    );
}

export default App;
