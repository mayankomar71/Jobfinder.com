import React from 'react';
import Input from './generalComponent/inputcomponent'
import Button from './generalComponent/buttoncomponent'
import { FormErrors } from './generalComponent/formerrors'
import axios from 'axios'

class Login extends React.Component {
    constructor(props) {

        super(props)

        this.state = {
            email: '',
            password: '',
            name: '',
            mobile: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }
componentDidMount()
{
    localStorage.getItem('Currentuser')&& this.props.history.push('/')
}

    handleInput = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }



    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors['email'] = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 8 && value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);

                fieldValidationErrors.password = passwordValid ? '' : 'is not valid';
                break;

            default:
                break;
        }


        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
        }, this.validateForm);
    }
    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });

    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        axios.get(`http://localhost:4000/getuser`, {
            params: {
                useremail: email,
                userpassword: password
            }
        })
            .then((response) => {

                console.log(response.data)
                localStorage.setItem('Currentuser', response.data["name"])
                localStorage.setItem('isLoggedIn', "true")
                this.props.history.push('/')
                console.log('Successfully Logged In');
              
            })
            .catch(function (error) {
                console.log(error);
            });

    }


    render() {
        return (
            <div>
                <form className="form-group" onSubmit={this.handleFormSubmit}>
                    <div className="default">
                        <FormErrors formErrors={this.state.formErrors} />
                    </div>
                    <h2 id='heading'><u>Log In</u></h2>
                    <Input input_type={'text'}
                        title={' Email'}
                        name={'email'}
                        value={this.state.email}
                        placeholder={'Enter your email'}
                        handleChange={this.handleInput}
                    />
                    <Input input_type={'password'}
                        title={' Password'}
                        name={'password'}
                        value={this.state.password}
                        placeholder={'Enter your password'}
                        handleChange={this.handleInput}
                    />
                    <Button
                        action={this.handleFormSubmit}
                        type={'submit'}
                        title={'Submit'}
                    />

                </form>


            </div>

        )
    }

}
export default Login