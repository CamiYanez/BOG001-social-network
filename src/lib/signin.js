import {componentSignin} from '../views/componentSignin.js';
import {signInEmailAndPassword, registerGoogle} from "./firebasefunction.js";



export default () =>{
    const template = document.querySelector("#template-signin");
    console.log(template);
    var clon = template.content.cloneNode(true);
    root.appendChild(clon);
    

    /* const formSignIn = document.querySelector('.form-signin'); */
/*     const btnSignin = document.querySelector('.btn-signup');
    const registerWithGoogle = document.querySelector('.btn-signin-google');

    btnSignin.addEventListener('click', (e) => {
        e.preventDefault()
        const email = document.querySelector(".email-signin").value;
        const password = document.querySelector(".password-signin").value;
        signInEmailAndPassword(email,password);
    });*/

    const signinFromSignup= document.querySelector('.signup-view');
    
    signinFromSignup.addEventListener('click',function(){
        window.location.hash = '';
        console.log(signinFromSignup);
    });
    
    /* registerWithGoogle.addEventListener("click", googleRegister);
        function googleRegister(e) {
            e.preventDefault();
            //aqui va el change al otro html
            const provider = new firebase.auth.GoogleAuthProvider();
            registerGoogle(provider);
    }  */
    
    
}