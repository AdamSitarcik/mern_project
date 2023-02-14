import { useState, useEffect } from 'react'
import { Logo } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import FormRow from '../components/FormRow'

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: true
}

function Register() {
    const [values, setValues] = useState(initialState)
    // global state and useNavigate

    const handleChange = (e) => {
        console.log(e.target);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <Wrapper className='full-page'>
            <form className='form' action=''  onSubmit={onSubmit}>
                <Logo />
                <h3>Login</h3>
                <FormRow name='name' type='text' value={values.name} labelText='name' onChange={handleChange}/>
                <FormRow name='name' type='text' value={values.name} labelText='name' onChange={handleChange}/>
                {/* name input */}
                {/* <div className='form-row'>
                    <label htmlFor='name' className='form-label'>name</label>
                    <input type='text' name='name' value={values.name} onChange={handleChange} className='form-input'/>
                </div> */}
                <button type='submit' className='btn btn-block'>Submit</button>
            </form>
        </Wrapper>
    )
}

export default Register