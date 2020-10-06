# ts-discord
A wrapper for the Discord API written in TypeScript

## Example usage
```js
const Discord = require('ts-discord');
const client = new Discord.Client('<access token provided by Discord>');

client.getUser()
  .then(user => console.log(user.username + '#' + user.discriminator))
  .catch(err => console.error(err));
```
