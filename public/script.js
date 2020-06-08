'use strict';
const URL = 'https://github.com/login/oauth/authorize';

const options = {
  client_id : '38504bbe9b13c37e2b28',
  scope:'read:user',
  state:'my acount Youesf Majdi',
};
console.log('kjfkdjf');
const queryString = Object.keys(options)
  .map((val)=>{
    return `${val}=${encodeURIComponent(options[val])}`;
  }).join('&');
console.log('hi', queryString);
const authUrl = `${URL}?${queryString}`;
const link = document.getElementById('oauth');
link.setAttribute('href', authUrl);