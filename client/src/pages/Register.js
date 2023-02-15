import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: false,
}

function Register() {
    const [values, setValues] = useState(initialState)
    // global state and useNavigate
    const { isLoading, showAlert, displayAlert, clearAlert } = useAppContext()

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember })
    }

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const { name, email, password, isMember } = values
        if (!email || !password || (!isMember && !name)) {
            displayAlert()
            return
        }
    }

    return (
        <Wrapper className='full-page'>
            <form className='form' action='' onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>
                {showAlert && <Alert />}
                {!values.isMember && <FormRow name='name' type='text' value={values.name} labelText='Name' handleChange={handleChange} />}
                <FormRow name='email' type='email' value={values.email} labelText='Email' handleChange={handleChange} />
                <FormRow name='password' type='password' value={values.password} labelText='Password' handleChange={handleChange} />
                <button type='submit' className='btn btn-block'>Submit</button>
                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}
                    <button type='button' onClick={toggleMember} className='member-btn'>{values.isMember ? 'Register' : 'Login'}</button>
                </p>
            </form>
        </Wrapper>
    )
}

export default Register