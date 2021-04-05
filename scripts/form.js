function signUp() {
    var email = document.getElementById("Email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);

    db.collection('users').add({
        email: email.value,
        points: 10000
    });
    promise.catch(e => alert(e.message));

    alert("Signed up.");
}

function signIn() {
    var email = document.getElementById("Email");
    console.log(email.value);
    var password = document.getElementById("password");
    console.log(password.value);

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    //alert("Signed in to " + email.value);
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
        alert("Not logged in.");

        // not logged in
    }
});

function addCollection() {
    db.collection('users').add({
        name: "HAHA"
    });
    console.log("HAHA");

}