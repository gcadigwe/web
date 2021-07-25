import { User } from './models/User';

const user = new User({ name: 'myname', age: 20 });

// user.set({ name: 'newname' });

user.on('change', () => {
  console.log('change event');
});

user.trigger('change');

// console.log(user.get('name'));
// console.log(user.get('age'));
