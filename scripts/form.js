const auth = firebase.auth();

function signUp() {
    var email = document.getElementById("Email");
    var password = document.getElementById("password");
    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

    db.collection('users').add({
        email: email.value,
        points: 10000
    });
    promise.catch(e => alert(e.message));

    alert("Signed up!");
    
    

    window.location.replace('../index.html');

}


function unhide() {
    document.getElementById('hide').setAttribute('display', 'block');
}

function signIn() {
    var email = document.getElementById("Email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    /*
    promise.then(() => {
        
    });
    */
    promise.catch(e => alert(e.message));

    //alert("Signed in to " + email.value);
    window.location.replace('../index.html');
    
}


function signOut() {
    auth.signOut();
    alert("Signed out.")
}

auth.onAuthStateChanged(function (user) {
    if (user) {
        var email = user.email;
        alert("Active user: " + email);
        
        // is signed in
    } else {
        //alert("Not logged in.");

        // not logged in
    }
});