/* B"H
*/
const Signinusers = [ ];

export let CurrentUsername = null;
export let CurrentUseremail = null;
export let CurrentUserpassword = null;


export function Signer(signinusername,email, password) {

    const susername = Signinusers.push(signinusername);
    const semail = Signinusers.push(x => x.Email = email);
    const spassword = Signinusers.push(password);
    return CurrentUsername = susername,CurrentUseremail = semail, CurrentUserpassword = spassword;
    

}