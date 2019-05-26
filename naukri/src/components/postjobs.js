import React from 'react';
import Input from './generalComponent/inputcomponent'
import Button from './generalComponent/buttoncomponent'
import { FormErrors } from './generalComponent/formerrors'
import Skills from './Suggestions'
import '../Styles/content.css'
import { WithContext as ReactTags } from 'react-tag-input'
const KeyCodes = {
  comma: 188,
  enter: 13
}

const suggestions = Skills.map(skills => {
  return {
    id: skills,
    text: skills
  }
})

const delimiters = [KeyCodes.comma, KeyCodes.enter]

class postjobs extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tags:[],
      suggestions: suggestions,
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
  handleDelete= (i)=> {
    const { tags } = this.state
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    })
  }

  handleAddition =(tag)=> {
    this.setState(state => ({ tags: [...state.tags, tag] }))
  }

  handleDrag =(tag, currPos, newPos)=> {
    const tags = [...this.state.tags]
    const newTags = tags.slice()
    newTags.splice(currPos, 1)
    newTags.splice(newPos, 0, tag)
    this.setState({ tags: newTags })
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
    this.setState({ formValid:  this.state.city_valid && this.state.job_designation_valid && this.state.salary_valid });
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    if(localStorage.getItem('Currentuser')){
      var company_name=localStorage.getItem('Currentuser');
      company_name = company_name.replace(/"/g,"");
  }
    
    this.props.postJob({
      company_name: company_name,
      city: this.state.city,
      job_designation:this.state.job_designation,
      salary: this.state.salary,
      tags:this.state.tags
      
    })
    this.setState({
      company_name: '',
      city: '',
      job_designation: '',
      salary: '',
      tags:[]


    })
    alert('Job Added');
    this.props.history.push('/')
}

 
  


  render() {
    const { tags, suggestions } = this.state
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
            <label htmlFor="Skills" className="form-label">Add Skills</label>
          <ReactTags
            tags={tags}
            suggestions={suggestions}
            delimiters={delimiters}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            handleDrag={this.handleDrag}
          /><br></br>

          {
          this.state.tags[3]&&this.state.city&&this.state.job_designation&&this.state.salary&&<Button
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













