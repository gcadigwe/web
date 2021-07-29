import { User } from './models/User';

// console.log(user.get('name'));
// console.log(user.get('age'));
const user = User.buildUser({ id: 2 });

user.fetch();
