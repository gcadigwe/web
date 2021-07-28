import { User } from './models/User';

// console.log(user.get('name'));
// console.log(user.get('age'));
const user = new User({ name: 'hwyya', age: 0 });

user.on('change', () => {
  console.log('change happened');
});

user.set({ name: 'hawa' });
