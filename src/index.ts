import { UserForm } from './views/UserForm';
import { User } from './models/User';

const user = User.buildUser({ name: 'name', age: 10 });

const userform = new UserForm(document.getElementById('root'), user);

userform.render();
