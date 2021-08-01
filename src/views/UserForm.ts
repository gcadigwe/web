import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-name': this.onSetNameClick,
      'mouseenter:h1': this.onHeaderHover,
      'click:.set-age': this.onsetAge,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  onsetAge = (): void => {
    this.model.setRandomAge();
    console.log(this.model.get('age'));
  };

  onButtonClick(): void {
    console.log('hi there');
  }

  onHeaderHover(): void {
    console.log('hover');
  }

  template(): string {
    return `
      <div>
        <h1>User Info</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random age</button>
      </div>
    `;
  }
}
