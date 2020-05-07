import myFetch from "./myFetch";

export let CurrentUser = null;

export async function Login(email, password) {
    const user = await myFetch('/login', {email, password}); //<-- post request -- url, body 
    return CurrentUser = user;
}