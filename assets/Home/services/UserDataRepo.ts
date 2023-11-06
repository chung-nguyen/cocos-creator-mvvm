import ObservableValue from "../../Utils/ObservableValue";
import UserDataRepoAdapter from "../../Utils/serviceAdapters/UserDataRepoAdapter";

export default class UserDataRepo implements UserDataRepoAdapter {
  public content = new ObservableValue<string>('');

  private _isLoaded: boolean;

  constructor () {
    this._isLoaded = false;
  }

  public save () {
    localStorage.setItem('content', this.content.value);
  }

  public load () {
    if (this._isLoaded) {
      return;
    }

    this.content.value = localStorage.getItem('content') || '';
    this._isLoaded = true;
  }

  public invalidate () {
    this._isLoaded = false;
  }
}
