import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => {
      this.render();
    });
  }

  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-name': this.onSetNameClick,
      'mouseenter:h1': this.onHeaderHover,
      'click:.set-age': this.onsetAge,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    const name = input.value;

    this.model.set({ name });
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

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventkey in eventsMap) {
      const [eventName, selector] = eventkey.split(':');
      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventkey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
