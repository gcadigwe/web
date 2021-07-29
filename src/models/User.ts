import { Model } from './Model';
import { Attribute } from './Attributes';
import { Eventing } from './Eventing';
import { Sync } from './sync';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attribute<UserProps>(attrs),
      new Eventing(),
      new Sync<UserProps>(rootUrl)
    );
  }
}
