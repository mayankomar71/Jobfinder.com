import Home from './homecomponent'
import Login from './Login'
import SignUp from './Signup'
import Addjob from './postjobs'
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