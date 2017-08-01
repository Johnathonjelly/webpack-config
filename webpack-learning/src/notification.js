function notify(message) {
  alert(message);
}
function log(message) {
  console.log(message);
}

class Person {
  constructor() {
    this.eyes = 'blue';
    this.hair = 'brown';
  }
}

export default {
  notify: notify,
  log: log,
  Person: Person
}

//so this is a pretty big concept. Some functions are declared above, and what is happening is that I want to export those funcitons to another file (the file that webpack will compile into bundle.js). The way to do that is to "export default" and give this an object. That object then needs keys which can be called whatever I like, and the value is a reference to whatever object or function (functions are objects) that I like. Seems like best practice to name the key value pair the same name for consistencey sake. 