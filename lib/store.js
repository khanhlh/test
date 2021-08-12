import {action, autorun, makeObservable, observable} from "mobx";

export class OptionsStore {
    options = {
        darkmode: true,
        sidebar: false
    }
  constructor() {
    makeObservable(this, {
      options: observable,
      toggle: action
    });
    autorun(() => {});
  }
  toggle(option) {
    this.options[option] = !this.options[option]
  }
}