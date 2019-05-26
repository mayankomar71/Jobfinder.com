import React from 'react'
import Input from './generalComponent/inputcomponent'
import Button from './generalComponent/buttoncomponent'
import { FormErrors } from './generalComponent/formerrors'
import SweetAlert from 'react-bootstrap-sweetalert';

class Editjobs extends React.Component {
  constructor (props) {
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

  handleInput = e => {
    const value = e.target.value
    const name = e.target.name
    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }

  validateField (fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let company_city_valid = this.state.company_city_valid
    let salary_valid = this.state.salary_valid
    let job_designation_valid = this.state.job_designation_valid
    switch (fieldName) {
      case 'city':
        company_city_valid = value.match(/^[a-z][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i)
        fieldValidationErrors.city = company_city_valid ? '' : 'Should be  Valid'
        break
      case 'salary':
        salary_valid = value.match(/^[0-9]+$/)
        fieldValidationErrors.salary = salary_valid ? '' : 'Should contain numbers only'
        break
      case 'job_designation':
        job_designation_valid = value.match(/^[a-z][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i)
        fieldValidationErrors.designation = job_designation_valid ? '' : 'Should be  Valid'
        break

      default:
        break
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        city_valid: company_city_valid,
        salary_valid: salary_valid,
        job_designation_valid: job_designation_valid
      },
      this.validateForm
    )
  }


  hideAlert() {
    this.setState({
      alert: null
    });
    this.props.history.push('/')
  }

  validateForm () {
    this.setState({ formValid: this.state.city_valid && this.state.job_designation_valid && this.state.salary_valid })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const getAlert = () => (
      <SweetAlert
        success
        title="Successfully Updated job"
        onConfirm={() => this.hideAlert()}
      >
      </SweetAlert>
    );

  
    const { job_designation, city, salary } = this.state

    if (localStorage.getItem('Currentuser')) {
      var company_name = localStorage.getItem('Currentuser')
      company_name = company_name.replace(/"/g, '')
    }
    if (localStorage.getItem('job_id')) {
      var id = localStorage.getItem('job_id')
      id = id.replace(/"/g, '')
    }

    this.props.updateJobs({ id, job_designation, city, salary }, company_name)
    this.setState({
      alert: getAlert()
    });
    
  }
  componentWillMount () {
    let job_object = JSON.parse(this.props.match.params.job)
    this.setState({
      job_designation: job_object.job_designation,
      salary: job_object.salary,
      city: job_object.city
    })
  }

  render () {
    return (
      <div>
        <form className='form-group' onSubmit={this.handleFormSubmit}>
          <div className='default'>
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <h2 id='heading'>
            <u>Edit Jobs</u>
          </h2>

          <Input
            input_type={'text'}
            title={'City'}
            name={'city'}
            value={this.state.city}
            placeholder={'Enter your City'}
            handleChange={this.handleInput}
          />
          <Input
            input_type={'text'}
            title={'Job Designation'}
            name={'job_designation'}
            value={this.state.job_designation}
            placeholder={'Enter Job Designation'}
            handleChange={this.handleInput}
          />

          <Input
            input_type={'number'}
            title={'Salary'}
            name={'salary'}
            value={this.state.salary}
            placeholder={'Enter Salary'}
            handleChange={this.handleInput}
          />

          {this.state.city && this.state.job_designation && this.state.salary && (
            <Button action={this.handleFormSubmit} type={'submit'} title={'Submit'} disabled={false} />
          )}
        </form>
        {this.state.alert}
      </div>
    )
  }
}
export default Editjobs
