# ts-discord
A wrapper for the Discord API written in TypeScript

## Installation
```
npm i --save ts-discord
# or
yarn add ts-discord
```

## Example usage
```js
const Discord = require('ts-discord');
const client = new Discord.Client('OAuth2 bearer token provided by the OAuth2 API');

client.fetchUser()
  .then(user => console.log(user.username + '#' + user.discriminator))
  .catch(err => console.error(err));
```
This will get the current user and print its username and discriminator.
