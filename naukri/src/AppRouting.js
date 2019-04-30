import Home from './components/homecomponent'
import Login from './components/Login'
import SignUp from './components/Signup'
import Addjob from './components/postjobs'
import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

const Router=(props)=>{
    return(
        <div>  
            <Switch>      
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signup" component={SignUp}></Route>
                <Route exact path="/postjobs" component={Addjob}></Route>
               <Redirect from='*' to='/' />
            </Switch>   
        </div>
    )
} 

export default Router;