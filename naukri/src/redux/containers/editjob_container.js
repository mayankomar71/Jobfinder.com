import EditJobs from '../../components/Editjobs'
import  {connect} from  "react-redux";
import {updateJobs} from '../actions/job_action'

const mapDispatchtoProps=(dispatch)=>{
    
    return {
        updateJobs: (data,company_name)=>dispatch(updateJobs(data,company_name)) ,

    }
}
export default connect(null,mapDispatchtoProps)(EditJobs)