import  {connect} from  "react-redux";
import Home from '../../components/homecomponent'
import {getjob_user} from '../actions/job_action.js';

const mapStateToProps = (state) =>{
    return {
        alljobs:state.jobs.data
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        dispatch,
        getjob_user: (companyname) => dispatch(getjob_user(companyname)),

    }
}
export const home= connect(mapStateToProps, mapDispatchToProps)(Home);