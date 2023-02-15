import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true,
    showAlert: false
}

function Register() {
    const [values, setValues] = useState(initialState)
    // global state and useNavigate

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <Wrapper className='full-page'>
            <form className='form' action='' onSubmit={onSubmit}>
                <Logo />
                <h3>Login</h3>
                {values.showAlert && <Alert />}
                <FormRow name='name' type='text' value={values.name} labelText='Name' handleChange={handleChange} />
                <FormRow name='email' type='email' value={values.email} labelText='Email' handleChange={handleChange} />
                <FormRow name='password' type='password' value={values.password} labelText='Password' handleChange={handleChange} />
                <button type='submit' className='btn btn-block'>Submit</button>
            </form>
        </Wrapper>
    )
}

export default Register