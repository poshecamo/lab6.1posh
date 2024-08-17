/* JS Script File*/
/* Driver Buttons working with function*/

/*We will trakc the ID of the current sign-in user*/
function onAuthStateChanged(user) {
    if (user) {
        location.href = 'home.html';
    } else {
        firebase.auth().signOut();
    }
}

window.addEventListener('load', function () {

    document.getElementById('sign-in-google').addEventListener('click', function () {

        var provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('email');
        firebase.auth().signInWithPopup(provider)
            .then(function (result) {
                console.log('Logging sucessfully', result.user);
            })
            .catch(function (error) {
                console.log('Logging fail', error);
            });


    });

    document.getElementById('sign-in-traditional').addEventListener('click', function () {

        var emailTxt = document.getElementById('email').value;
        var passtxt = document.getElementById('password').value;

        firebase.auth().signInWithEmailAndPassword(emailTxt, passtxt)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                // ...
                console.log('Logging sucessfully');
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('Logging fail', error);
            });


    });

    //SignIn by CellPhone
    //+15145660079

    function getPhoneNumberFromUserInput() {
        return "+15145660079";
    }

    document.getElementById('sign-in-phone').addEventListener('click', function () {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        const phoneNumber = getPhoneNumberFromUserInput();
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
                // SMS sent. Prompt user to type the code from the message, then sign the
                // user in with confirmationResult.confirm(code).
                window.confirmationResult = confirmationResult;
                const code = '123456';
                confirmationResult.confirm(code).then((result) => {
                    // User signed in successfully.
                    const user = result.user;
                }).catch((error) => {
                });
                // ...
            }).catch((error) => {
                alert(error);
            });
    });


    //Listen for auth state changes
    firebase.auth().onAuthStateChanged(onAuthStateChanged);


});