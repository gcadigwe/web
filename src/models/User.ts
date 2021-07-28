import { Eventing } from './Eventing';
import { Sync } from './sync';
import { Attribute } from './Attributes';
import { AxiosResponse } from 'axios';

export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attribute: Attribute<UserProps>;

  constructor(attrs: UserProps) {
    this.attribute = new Attribute<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attribute.get;
  }

  set(update: UserProps): void {
    this.attribute.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attribute.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id');
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    });
  }
}
