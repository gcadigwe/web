import { User } from './models/User';

const collection = User.buildUserCollection();
// console.log(user.get('name'));
// console.log(user.get('age'));

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
