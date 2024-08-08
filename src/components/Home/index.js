import './index.scss'
import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo.png'
import HeroImg from '../../assets/images/hero.png'

const Home = () => {
    return (
        <div>
            <div className='absolute'>
                <div className='absolute inset-0 justify-center'>
                    <div className='bg-shape1 bg-teal opacity-50 bg-blur'></div>
                    <div className='bg-shape2 bg-primary opacity-50 bg-blur'></div>
                    <div className='bg-shape1 bg-purple opacity-50 bg-blur'></div>
                </div>
            </div>

            <section className='header'>
                <div class="logo">
                    <span>L</span>ogo.
                </div>
                <button>Login</button>
            </section>

            <section className='hero'>
                <div className='hero-box'>
                    <h4>Accept Crypto Payments</h4>
                    <h2>3<span>Pay</span></h2>
                    <h1>Payment Gateway</h1>
                    <div className='btn'>
                        <a href='#'>
                            <i class="ri-arrow-right-line"></i>
                            <span>Get Started</span>
                        </a>
                    </div>
                </div>

                <img src={HeroImg} alt="Hero" className='hero-img' />
            </section>
            {/* <div className='hero'>
            </div> */}

        </div>
    )
}

export default Home