import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import News from "../Pages/News/News";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Layout from "./Layout/Layout";

const App = () => {
    return (
        <>
            <Router>
                <switch>
                    <Layout>
                        <Switch>
                        <Route exact path={"/"} component={News}/>
                        <Route path={"/login"} component={Login}/>
                        <Route path={"/register"} component={Register}/>
                        </Switch>
                    </Layout>
                </switch>
            </Router>
        </>
    );
};

export default App;
