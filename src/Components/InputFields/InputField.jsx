import './InputField.css'; 

const InputField = () => {
    return ( 
        <>
            <div className="container-form">
                <div className="header">
                    <div className="text">SIGN UP</div>
                    <div className="underline"></div>
                </div>
                <div className="login-box">
                    <div className="login-header">
                        <header>Welcome</header>
                        <p>We are happy to have you back!</p>
                    </div>
                    <div className="row">
                        <div className="column">
                            <div className="input-box">
                                <input type="submit" className="btn-usertype btn-usuario" value="SOY USUARIO" />
                            </div>
                        </div>
                        <div className="column">
                            <div className="input-box">
                                <input type="submit" className="btn-usertype btn-paseador" value="SOY PASEADOR" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="input-box">
                        <input type="text" className="input-field" id="email" autocomplete="off" required />
                        <label for="email">Email or phone</label>
                    </div>
                    <div className="input-box">
                        <input type="password" className="input-field" id="password" autocomplete="off" required />
                        <label for="password">Password</label>
                    </div>
                    <div className="forgot">
                        <section>
                            <a href="#" className="forgot-link">Forgot password?</a>
                        </section>
                    </div>
                    <div className="input-box">
                        <input type="submit" className="input-submit" value="Sign In" />
                    </div>
                    <div className="sign-up">
                        <p>Don't have account <a href="#">Sign up</a></p>
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default InputField;