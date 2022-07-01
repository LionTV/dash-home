<script>
import {signOut, signInWithPopup} from "firebase/auth";
import { auth, provider } from "../firebase";
import { browser } from "$app/env";

let photoURL = "";
let displayName = "";
let email = "";
let loggedin = false;
let stayloggedin = false;

$: {
    if (stayloggedin == false) {
        if (browser) {
            let storage = window.localStorage;
            storage.setItem("loggedin", "false");
        }
    } else {
        if (browser) {
            let storage = window.localStorage;
            storage.setItem("loggedin", "true");
        }
    }
}

if (browser) {
    let storage = window.localStorage;
    if (storage.getItem("loggedin") === null) {
        storage.setItem("loggedin", "false");
    }else if (storage.getItem("loggedin") === "true") {
        loggedin = true;
        stayloggedin = loggedin;
        //@ts-ignore
        photoURL = storage.getItem("photoURL");
        //@ts-ignore
        displayName = storage.getItem("displayName");
        //@ts-ignore
        email = storage.getItem("email");
    }
}

const login = () => {
    signInWithPopup(auth, provider)
    .then(result => {
        let user = result.user;
        //@ts-ignore
        photoURL = user.photoURL;
        //@ts-ignore
        displayName = user.displayName;
        //@ts-ignore
        email = user.email;
        loggedin = true;
        stayloggedin = loggedin;
        if (browser) {
            let storage = window.localStorage;
            storage.setItem("photoURL", photoURL);
            storage.setItem("displayName", displayName);
            storage.setItem("email", email);
            storage.setItem("loggedin", "true");
        }
    })
};

const logout = () => {
    signOut(auth).then(() => {
        console.log("logged out")
        loggedin = false;
        stayloggedin = loggedin;
        if (browser) {
            let storage = window.localStorage;
            storage.setItem("loggedin", "false");
            storage.setItem("photoURL", "");
            storage.setItem("displayName", "");
            storage.setItem("email", "");
        }
    }).catch(err => {
        console.log(err)
    })
}

</script>

<div class="rounded border-2 border-slate-800 mt-4 h-auto bg-slate-800">
    <h1 class="font-bold text-xl m-4">Account</h1>
    {#if loggedin}
        <img class="rounded-full ml-4" id="pb" src={photoURL} alt="logo">
        <h2 class="text-center mt-2 ml-4" id="displayname">{displayName}</h2>
        <h2 class="text-center mt-2 ml-4" id="email">{email}</h2>
        <input bind:checked={stayloggedin} type="checkbox" value="" class="ml-4 mt-4"> Eingeloggt bleiben <br>
        <button class="bg-red-600 mx-auto p-2 ml-4 mt-4 mb-4 rounded" on:click={logout}>LOGOUT</button>
    {:else}
        <button class="bg-gray-600 ml-4 p-2 mb-4 rounded" on:click={login}>Login with google</button>
    {/if}
</div>

<style>
    #displayname {
        background-color: rgb(2, 1, 1);
        width: 40vh;
    }

    #email {
        background-color: rgb(2, 1, 1);
        width: 40vh;
    }
    #pb {
        width: 75px;
        height: 75px;
    }
</style>