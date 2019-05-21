import {home} from '../redux/containers/job_container'
import Login from '../redux/containers/logincontainer'
import SignUp from '../redux/containers/user_signup_container'
import Addjob from '../redux/containers/postjobcontainer'
import EditJob from '../redux/containers/editjob_container';
import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

const Router=(props)=>{
    return(
        <div>  
            <Switch>      
                <Route exact path="/" component={home}></Route>
                <Route exact path="/login" component={Login}></Route>
                <Route exact path="/signup" component={SignUp}></Route>
                <Route exact path="/postjobs" component={Addjob}></Route>
                <Route path='/update/:job' component={EditJob} />
               <Redirect from='*' to='/' />
            </Switch>   
        </div>
    )
} 

export default Router;