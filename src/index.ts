import { User } from './models/User';

const user = new User({});

user.set({ name: 'newname', age: 20 });

// user.fetch();
user.save();

// console.log(user.get('name'));
// console.log(user.get('age'));
