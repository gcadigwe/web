import { User } from './models/User';

// console.log(user.get('name'));
// console.log(user.get('age'));
const user = new User({ id: 1, name: 'amokashi', age: 0 });

user.on('save', () => {
  console.log(user);
});

user.save();
