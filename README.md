# ts-discord
A wrapper for the Discord API written in TypeScript

### Installation
```
npm i --save ts-discord
# or
yarn add ts-discord
```

### Example usage
```js
const Discord = require('ts-discord');
const client = new Discord.Client('<Bearer access token provided by Discord>');

client.getUser()
  .then(user => console.log(user.username + '#' + user.discriminator))
  .catch(err => console.error(err));
```
