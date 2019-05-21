import { connect } from "react-redux";
import Signup from '../../components/Signup';
import { getsignup } from '../actions/user_action';
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        getsignup: (post_data) => dispatch(getsignup(post_data)),

    }
}
export default connect(null, mapDispatchToProps)(Signup);
