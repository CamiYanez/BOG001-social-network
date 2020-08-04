
export const componentSignup = 
            `<div id="signup">
                <div id = "container-desktop">
                    <img src="../images/logo2.png" id="logo"/>
                    <p>Find events close to you and build music connections to share your passion</p>
                        <form id="signup-form">
                            <label>Name <input type="text" placeholder="Luke Skywalker" class="name-signup" /></label>
                            <label>Email<input type="email" class="email-signup" placeholder="example@gmail.com"/></label>
                            <p id = "verification-email" class="style-wrong"></p>
                            <label>Password<input type="password" class="password-signup" placeholcer="password" /></label>
                            <p id="verification-password" class="hide style-wrong"></p>
                            <button class="btn-signup">SIGN UP</button>
                        </form>

                    <div class ="container-btn-google">
                        <button class="btn-signin-google"><i class="fa fa-google"></i> SIGN IN WITH GOOGLE</button>
                        <p id="alreadyAccount">Already have an account? <span class="signin-view" href ="">Sign in</span></p>
                    </div>
                </div>
                            
                <div class="container-musicians">
                    <img src="../images/musicos.png" id="musicians" />
                </div>

            </div>`
;