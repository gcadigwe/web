import { User } from './models/User';

// console.log(user.get('name'));
// console.log(user.get('age'));
const user = new User({ id: 1 });

user.on('change', () => {
  console.log(user);
});

user.fetch();
