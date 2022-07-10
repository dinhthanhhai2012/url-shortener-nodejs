"use strict";

class Register {
	get rules () {
		return {
			name: 'required',
			email: "required|email|unique:users",
			password: 'required|min:8|confirmed',
			password_confirmation: 'required|min:8'
		}
	}

	get messages() {
		return {
			'name.required': 'Name is required',
			'email.required':'Email is required',
			'email.email':'A valid email is required',
			'email.unique':'Email is already used',
			'password.required':'Password is required',
			'password.min':'Password must have at least 8 characters',
			'password.confirmed':'Password must match with confirm password',
			'password_confirmation.required':'Confirm password is required'
		}
	}

	async fails(errorMessages) {
		this.ctx.session.flashOnly(['name','email'])
		this.ctx.session.withErrors(errorMessages).flashAll()
		this.ctx.response.redirect('back')
	}
}

module.exports = Register;
