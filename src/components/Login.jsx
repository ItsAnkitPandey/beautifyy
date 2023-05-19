import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Login = () => {
    return (
        <div className='container'>
         <Navbar />
            <div className="Wrapper Login">
                <div className="Container">
                    <div className="Col-Left">
                        <div className="Login-Text">
                            <h2>Welcome!</h2>
                            <p>Create Your Beautify Account.<br/>For Free!</p>
                            <p Href="" className="Btn">Sign Up</p>
                        </div>
                    </div>

                    <div className="Col-Right">
                        <div className="Login-Form">
                            <h2 className="login_title">Login</h2>
                            <form Action="" id="login_form" >
                                <p>
                                    <label>Username/Email<span>*</span></label>
                                    <input Type="Text" placeholder="Username Or Email" Required />
                                </p>
                                <p>
                                    <label>Password<span>*</span></label>
                                    <input Type="Password" placeholder="Password" Required />
                                </p>
                                <p>
                                    <input Type="Submit" value="Sign In" />
                                </p>
                                <p>
                                    <a href="">Forgot Password?</a>
                                </p>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Login