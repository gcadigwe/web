import { User } from './models/User';

const user = new User({ id: 1 });

// user.set({ name: 'newname' });

user.fetch();

// console.log(user.get('name'));
// console.log(user.get('age'));
