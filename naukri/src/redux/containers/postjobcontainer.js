import { connect } from "react-redux";
import PostJob from '../../components/postjobs';
import { postJob} from '../actions/job_action';
const mapDispatchToProps=(dispatch)=>{
    
    return {
        postJob: (company)=>dispatch(postJob(company)) ,
      
    }
}
export default connect(null, mapDispatchToProps)(PostJob);