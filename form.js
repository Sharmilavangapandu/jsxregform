import React, {Component} from 'react'
class Register extends Component {
    render(){
        return(
            <div>
               <h2>Registration Form</h2>
		<form>
			<label>User Name:</label><br></br>
			<input type="text" name="FirstName" required/><br></br>
			<label>E-mail ID:</label><br></br>
			<input type="email" name="email" required/><br></br>
			<label>Mobile Number:</label><br></br>
			<input type="text" name="MobileNumber" title="should contain numbers only and size should be 10" pattern="[1-9]{1}[0-9]{9}" required/><br></br>
		    <label>Password:</label><br></br>
			<input type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
			title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/><br></br>
			<input type="submit" name="submit"/>
						
					</form>
			<span id="result">
            </span>
<body/>
            </div>
        )
    }
}
export default Register;
