import React from 'react';


const Button = (props) => {
	return(
	<button 
		style= {props.style} 
		className ="btn btn-success"
		onClick= {props.action} 
		disabled={props.disabled}> 
		{props.title} 
	</button>)
}


export default Button;