import notification from './notification';
// //the string after import can be whatever I like. This is an alias. I could have called it 'bob' or anything I like.

notification.log('hello');
notification.notify('hello!');
const Anna = new notification.Person();

console.log(Anna);
console.log("typeof: " + typeof Anna);
console.log(notification);
require('./main.scss'); //SPENT FOREVER ON ERROR ! Thing is, you need to "require('./style.css')" in main.js for this command to actually export and make a css file.
