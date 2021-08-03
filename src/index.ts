// import { UserForm } from './views/UserForm';
// import { User } from './models/User';

// const user = User.buildUser({ id: 1, name: 'name', age: 10 });

// const root = document.getElementById('root');

// if (root) {
//   const userform = new UserForm(root, user);
//   userform.render();
// } else {
//   throw new Error('Error');
// }

import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { User, UserProps } from './models/User';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');

  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();
