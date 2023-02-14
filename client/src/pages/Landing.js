import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import {Logo} from '../components'
import {Link} from 'react-router-dom'

function Landing() {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby big mood pour-over quinoa venmo jianbing. Flexitarian squid man bun praxis yes plz gentrify try-hard enamel pin 8-bit tumblr pour-over ramps ennui lomo. Wayfarers post-ironic dreamcatcher authentic, skateboard gluten-free flexitarian kombucha single-origin coffee kitsch.uihasd aiusdhasuhdf aiusdf aiusdh xkjzcvniuhs dfiujcvkn zxciuv ha
                    </p>
                    <Link to='/register' className='btn btn-hero'>Login/Register</Link>
                </div>
                <img src={main} alt='job hunt' className='img main-img' />
            </div>
        </Wrapper>
    )
}

export default Landing