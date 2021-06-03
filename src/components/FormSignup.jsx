import React from 'react';
import useForm from '../Hooks/useForm';
import validate from '../validation/validateInfo';
import '../components/Form/style.css';

const FormSignup = ({ submitForm }) => {
	const { handleChange, handleSubmit, values, errors } = useForm(
		submitForm,
		validate
	);

	return (
		<div className='form-content-right'>
			<form onSubmit={handleSubmit} className='form' noValidate>
				<h1>Log in to Instabug</h1>
				<div className='form-inputs'>
					<label className='form-label'>Email</label>
					<input
						className='form-input'
						type='email'
						name='email'
						placeholder='Enter your email'
						value={values.email}
						onChange={handleChange}
					/>
					{errors.email && <p>{errors.email}</p>}
				</div>
				<div className='form-inputs'>
					<label className='form-label'>Password</label>
					<input
						className='form-input'
						type='password'
						name='password'
						placeholder='Enter your password'
						value={values.password}
						onChange={handleChange}
					/>
					{errors.password && <p>{errors.password}</p>}
				</div>
				<button className='form-input-btn' type='submit'>
					Sign up
				</button>
				<span className='form-input-login'>
					Don't have an account?
					<a href='#'>Sign up</a>
				</span>
			</form>
		</div>
	);
};

export default FormSignup;
