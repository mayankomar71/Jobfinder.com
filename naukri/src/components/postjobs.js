import React from 'react';
import Input from './generalComponent/inputcomponent'
import Button from './generalComponent/buttoncomponent'
import { FormErrors } from './generalComponent/formerrors'
import axios from 'axios'

class postjobs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      company_name: '',
      city: '',
      job_designation: '',
      salary: 0,
      formErrors: { city: '', job_designation: '', salary: '' },
      company_city_valid: false,
      job_designation_valid: false,
      city_valid: false,
      salary_valid: false,
      addformValid: false
    }
  }


  handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value },
      () => { this.validateField(name, value) });

  }




  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let company_city_valid = this.state.company_city_valid;
    let salary_valid = this.state.salary_valid;
    let job_designation_valid = this.state.job_designation_valid
    switch (fieldName) {

      case 'city':
        company_city_valid = value.match(/^[a-z][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i);
        fieldValidationErrors.city = company_city_valid ? '' : 'Should be  Valid';
        break;
      case 'salary':
        salary_valid = value.match(/^[0-9]+$/);
        fieldValidationErrors.salary = salary_valid ? '' : 'Should contain numbers only';
        break;
      case 'job_designation':
        job_designation_valid = value.match(/^[a-z][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i);
        fieldValidationErrors.designation = job_designation_valid ? '' : 'Should be  Valid';
        break;

      default:
        break;
    }


    this.setState({
      formErrors: fieldValidationErrors,
      city_valid: company_city_valid,
      salary_valid: salary_valid,
      job_designation_valid: job_designation_valid

    }, this.validateForm);
  }
  validateForm() {
    console.log(this.state.formErrors)

    this.setState({ formValid:  this.state.city_valid && this.state.job_designation_valid && this.state.salary_valid });
  }
  handleFormSubmit = (event) => {
    if(localStorage.getItem('Currentuser')){
      var company_name=localStorage.getItem('Currentuser');
      company_name = company_name.replace(/"/g,"");
  }
    event.preventDefault();
    const {  city, job_designation, salary } = this.state;
    axios.post('http://localhost:4000/jobs', { company_name, city, job_designation, salary })
      .then((response) => {
        this.props.history.push('/')
        console.log('Successfully added Job');
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
      company_name: '',
      city: '',
      job_designation: '',
      salary: ''


    })
  }



  render() {
    return (
      <div>
        <form className="form-group" onSubmit={this.handleFormSubmit}>
          <div className="default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <h2 id='heading'><u>Post Jobs</u></h2>

          <Input input_type={'text'}
            title={'City'}
            name={'city'}
            value={this.state.city}
            placeholder={'Enter your City'}
            handleChange={this.handleInput}
          />
          <Input input_type={'text'}
            title={'Job Designation'}
            name={'job_designation'}
            value={this.state.job_designation}
            placeholder={'Enter Job Designation'}
            handleChange={this.handleInput}
          />


          <Input input_type={'number'}
            title={'Salary'}
            name={'salary'}
            value={this.state.salary}
            placeholder={'Enter Salary'}
            handleChange={this.handleInput}
          />

          {
          this.state.city&&this.state.job_designation&&this.state.salary&&<Button
            action={this.handleFormSubmit}
            type={'submit'}
            title={'Submit'}
            disabled={false}
          />
          }


        </form>


      </div>

    )
  }

}
export default postjobs