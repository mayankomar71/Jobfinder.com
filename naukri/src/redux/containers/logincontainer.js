import  {connect} from  "react-redux";
import Login from '../../components/Login';
import {getlogin} from '../actions/user_action'
const mapStateToProps=(state)=>{
   return {       
       currentUser:state.user.data
          }
}

const mapDispatchToProps=(dispatch)=>{
    
    return {
      
        getlogin: (user)=>dispatch(getlogin(user)) ,

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);