import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'name', age: 10 });

const root = document.getElementById('root');

if (root) {
  const userform = new UserForm(root, user);
  userform.render();
} else {
  throw new Error('Error');
}
