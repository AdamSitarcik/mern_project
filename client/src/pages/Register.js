import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appContext';
import { useNavigate } from 'react-router-dom';

const initialState = {
    name: '',
    email: '',
    password: '',
    isMember: false,
};

function Register() {
    const [values, setValues] = useState(initialState);
    const navigate = useNavigate();
    const { user, isLoading, showAlert, displayAlert, setupUser } = useAppContext();

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const { name, email, password, isMember } = values;

        if (!email || !password || (!isMember && !name)) {
            displayAlert();
            return;
        }

        const currentUser = { name, email, password };

        if (isMember) {
            setupUser({ currentUser, endpoint: 'login', alertText: 'Login successful' });
        }
        else {
            setupUser({ currentUser, endpoint: 'register', alertText: 'User registered' });
        }
    };

    useEffect(() => {
        if (user) {
            setTimeout(() => {
                navigate('/');
            }, 3000);
        }
    }, [user, navigate]);

    return (
        <Wrapper className='full-page'>
            <form className='form' action='' onSubmit={onSubmit}>
                <Logo />
                <h3>{values.isMember ? 'Login' : 'Register'}</h3>

                {showAlert && <Alert />}

                {!values.isMember && <FormRow name='name' type='text' value={values.name} labelText='Name' handleChange={handleChange} />}

                <FormRow name='email' type='email' value={values.email} labelText='Email' handleChange={handleChange} />

                <FormRow name='password' type='password' value={values.password} labelText='Password' handleChange={handleChange} />

                <button type='submit' className='btn btn-block' disabled={isLoading}>Submit</button>

                <button type='button' className='btn btn-block btn-hipster' disabled={isLoading} onClick={() => {
                    setupUser({ currentUser: { email: 'testUser@test.com', password: 'secret' }, endpoint: 'login', alertText: 'Login successful' });
                }}>
                    {isLoading ? 'Loading...' : 'Demo user'}
                </button>

                <p>
                    {values.isMember ? 'Not a member yet?' : 'Already a member?'}

                    <button type='button' onClick={toggleMember} className='member-btn'>{values.isMember ? 'Register' : 'Login'}</button>
                </p>
            </form>
        </Wrapper>
    );
}

export default Register;