import React from 'react'
import { reduxForm, Field } from 'redux-form'

const Signup = () => {
	return (
		<form>
			<fieldset>
				<label>Email</label>
				<Field name="email" type="text" component="input" autoComplete="none" />
			</fieldset>
			<fieldset>
				<label>Password</label>
				<Field name="password" type="password" component="input" autoComplete="none" />
			</fieldset>
		</form>
	)
}

export default reduxForm({ form: 'signup' })(Signup)