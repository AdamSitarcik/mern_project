import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

function Landing() {
    return (
        <Wrapper>
            <nav>
                <img src={logo} alt='jobify' className='logo' />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby big mood pour-over quinoa venmo jianbing. Flexitarian squid man bun praxis yes plz gentrify try-hard enamel pin 8-bit tumblr pour-over ramps ennui lomo. Wayfarers post-ironic dreamcatcher authentic, skateboard gluten-free flexitarian kombucha single-origin coffee kitsch.uihasd aiusdhasuhdf aiusdf aiusdh xkjzcvniuhs dfiujcvkn zxciuv ha
                    </p>
                    <button className='btn btn-hero'>Login/Register</button>
                </div>
                <img src={main} alt="job hunt" className='img main-img' />
            </div>
        </Wrapper>
    )
}

export default Landing