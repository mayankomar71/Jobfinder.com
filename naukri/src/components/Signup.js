import React from 'react'
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

class Signup extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tags:[],
      suggestions: suggestions,
      email: '',
      password: '',
      name: '',
      mobile: '',
      formErrors: { name: '', email: '', password: '', phone: '' },
      nameValid: false,
      emailValid: false,
      passwordValid: false,
      phoneValid: false,
      formValidsignup: false
    }
  }
  handleDelete= (i)=> {
    const { tags } = this.state
    this.setState({
      tags: tags.filter((tag, index) => index !== i)
    })
  }

  handleAddition =(tag)=> {
    this.setState(state => ({ tags: [...state.tags, tag] })
    )
  }

  handleDrag =(tag, currPos, newPos)=> {
    const tags = [...this.state.tags]
    const newTags = tags.slice()
    newTags.splice(currPos, 1)
    newTags.splice(newPos, 0, tag)
    this.setState({ tags: newTags })
  }


  handleInput = e => {
    const value = e.target.value
    const name = e.target.name
    this.setState({ [name]: value }, () => {
      this.validateField(name, value)
    })
  }
  componentDidMount () {
    localStorage.getItem('isLoggedIn') === 'true' &&
      this.props.history.push('/')
  }

  validateField (fieldName, value) {
    let fieldValidationErrors = this.state.formErrors
    let emailValid = this.state.emailValid
    let passwordValid = this.state.passwordValid
    let nameValid = this.state.passwordValid
    let phoneValid = this.state.phoneValid
    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors['email'] = emailValid ? '' : ' is invalid'
        break
      case 'password':
        passwordValid =
          value.length >= 8 &&
          value.match(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
          )

        fieldValidationErrors.password = passwordValid ? '' : 'is not valid'
        break
      case 'name':
        nameValid = value.match(
          /^[a-z][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i
        )
        fieldValidationErrors.name = nameValid ? '' : 'Should be  Valid'
        break
      case 'mobile':
        phoneValid = value.length === 10 && value.match(/^[0-9]+$/)
        fieldValidationErrors.phone = phoneValid
          ? ''
          : 'Number should be valid.'
        break
      default:
        break
    }

    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        nameValid: nameValid,
        phoneValid: phoneValid
      },
      this.validateForm
    )
  }
  validateForm () {
    this.setState({
      formValidsignup:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.nameValid &&
        this.state.phoneValid
    })
  }
  handleFormSubmit = event => {
    event.preventDefault()
    const { name, password, email, mobile,tags} = this.state
    const role = 'user'
    this.props.getsignup({ name, email, password, mobile, role ,tags})
    alert('Signup Successsful')
    this.setState({
      name: '',
      password: '',
      email: '',
      role: '',
      mobile: '',
      tags:[]
    })
    return this.props.history.push('/login')
  }

  render () {
    const { tags, suggestions } = this.state
    return (
      <div>
        <form className='form-group' onSubmit={this.handleFormSubmit}>
          <div className='default'>
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <h2 id='heading'>
            <u>Sign Up</u>
          </h2>
          <Input
            input_type={'text'}
            title={'Name'}
            name={'name'}
            value={this.state.name}
            placeholder={'Enter your Name'}
            handleChange={this.handleInput}
          />
          <Input
            input_type={'text'}
            title={' Email'}
            name={'email'}
            value={this.state.email}
            placeholder={'Enter your email'}
            handleChange={this.handleInput}
          />
          <Input
            input_type={'password'}
            title={' Password'}
            name={'password'}
            value={this.state.password}
            placeholder={'Enter your password'}
            handleChange={this.handleInput}
          />
          <Input
            input_type={'text'}
            title={'Mobile'}
            name={'mobile'}
            value={this.state.mobile}
            placeholder={'Enter your phone Number'}
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
           
          {this.state.tags[3]&&<Button
            action={this.handleFormSubmit}
            type={'submit'}
            title={'Submit'}
            disabled={!this.state.formValidsignup}
          />}
        </form>
      </div>
    )
  }
}
export default Signup
