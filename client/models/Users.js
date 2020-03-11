const Users = [
    { Name : 'Moshe', Password: '2020', Email: 'plotkin@newpaltz.edu' },
    { Name : 'Brache', Password: '5780', Email: 'chabad@newpaltz.edu' },

];

export let CurrentUser = null;

export function Login(email, password) {
 const user = Users.find(x => x.Email == email);
 if(!user) throw Error('User not found');
 if(user.Password != password) throw Error ('Wrong Password')

 return CurrentUser=user;
 
}