import CONSTANTS from '../constants/index.js';

// const userInfo = document.querySelector('#user-info');

// userInfo.addEventListener('click', (e) => {
//   window.location = `/pages/profile.html?name=Mukesh&age=25`;
// });

// // import get from './func/get.js';

// // const getUser = async () => {
// //   const data = await get('https://api.github.com/users/luvjeri');
// //   console.log(data);
// // };

// // getUser();

// const userInput = document.querySelector('#user-input');

// userInput.addEventListener('keyup', async () => {

//   const data = await fetch(`${CONSTANTS.API_URL}${userInput.value}`);

//   const user = await data.json();

//   console.log(user);

//   const userInfo = document.querySelector('#user-info');

//   console.log(user);

//   //   const userName = document.createElement('h2');
//   //   userName.textContent = user.name;
//   //   const userImage = document.createElement('img');
//   //   userImage.src = user.avatar_url;

//   userInfo.innerHTML = `
//     <h2>${user.name}</h2>
//     <img src="${user.avatar_url}">
//   `;
// });

axios.defaults.headers.common['Authorization'] = CONSTANTS.API_TOKEN;
axios.defaults.baseURL = CONSTANTS.API_URL;

axios.get('user').then((res) => {
  console.log(res.data);
});

axios.get('user/repos').then((res) => {
  console.log(res.data);
});

axios.get('rate_limit').then((res) => {
  console.log(res.data);
});
