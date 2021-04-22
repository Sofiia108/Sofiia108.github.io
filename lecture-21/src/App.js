import {Route, Switch} from 'react-router';
import './App.css';
import {Navigation} from "./components/navigation";
import {appRoutes} from './routes';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Navigation />
            </header>
            <main className="content">
                <Switch>
                    {appRoutes.map(route => (
                        <Route key={route.path} {...route} />
                    ))}
                    <Route path="*">
                        <p>No Page Found</p>
                    </Route>
                </Switch>
            </main>
        </div>
    );
}

export default App;
