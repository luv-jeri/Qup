import CONSTANTS from '../constants/index.js';

const signIn = (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const { USERS } = CONSTANTS;
  const user = USERS.find((user) => user.email === email && user.password === password);
  user ? alert('Sign in success') : alert('Sign in failed');
};

const btn = document.getElementById('sing-in');

btn.addEventListener('click', signIn);

//` DESTRUCTURE and SPREAD OPERATOR

// const arr = [1, 2, 3, 3, 4, 5];

// const res = arr.find((el) => el === 3);

// console.log(res ? 'found' : 'not found');
//` falsy value:       undefined, null, 0, '', NaN
//` truthy value:      any other value
// // const age = 18;
// let ok = age > 18 ? SubmitEvent() : console.log('bye');

// // if (0) {
// //   ok = true;
// //   const a = 10;
// // } else {
// //   ok = false;
// // }

// // console.log(ok);

// const sum = () => {};

// const ok = sum();
