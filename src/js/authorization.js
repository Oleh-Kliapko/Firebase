// import { UserFetch } from './userFetch';

// const refs = {
//   formEl: document.querySelector('#form-auth'),
//   logInBtn: document.querySelector('.log-in'),
//   createAccountBtn: document.querySelector('.create-account'),
//   email: document.querySelector('#user-email'),
//   password: document.querySelector('#user-password'),
// };

// refs.formEl.addEventListener('submit', onCreateUser, onLogIn);
// refs.createAccountBtn.addEventListener('click', onCreateUser);
// refs.logInBtn.addEventListener('click', onLogIn);
// let userData = {};

// async function onCreateUser(evt) {
//   evt.preventDefault();
//   console.log(evt.target);

//   userData = {
//     userEmail: refs.email.value,
//     userPassword: refs.password.value,
//     watchedMovies: [''],
//     queueMovies: [''],
//   };

//   await UserFetch.createUser(userData);
//   refs.formEl.reset();
// }

// async function onLogIn(evt) {
//   evt.preventDefault();
//   console.log(evt.target);

//   userData = {
//     userEmail: refs.email.value,
//     userPassword: refs.password.value,
//   };

//   const { userEmail, userPassword } = userData;

//   await UserFetch.getUserData(userEmail, userPassword).then(response =>
//     console.log(response)
//   );
//   refs.formEl.reset();
// }
