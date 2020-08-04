export const componentSignin = 
`<div id="signin">
    <div id = "container-desktop">
        <img src="../images/logo2.png" id="logo"/>
        <p>Find events close to you and build music connections to share your passion</p>
    
        <form id ='form-signin'>
            <label>Email<input type="email" class="email-signin" placeholder="example@gmail.com"/></label>
            <p id = "verification-email" class="style-wrong"></p>
            <label>Password<input type="password" class="password-signin" placeholcer="password" /></label>
            <p id="verification-password" class="hide style-wrong"></p>
            <button class="btn-signup">SIGN IN</button>
        </form>
    
        <div class ="container-btn-google">
            <button class="btn-signin-google"><i class="fa fa-google"></i> SIGN IN WITH GOOGLE</button>
            <p id="dont-have-account"> Don’t have an account? <span class="signup-view" href ="/signin">Sign Up</span></p>
        </div>
    </div>

    <div class="container-musicians">
        <img src="../images/musicos.png" id="musicians" />
    </div>
        
    </div>`;