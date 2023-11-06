import ObservableValue from "../../Utils/ObservableValue";
import UserDataRepoAdapter from "../../Utils/serviceAdapters/UserDataRepoAdapter";

export default class GlobalStateRepo implements UserDataRepoAdapter {
  public tabIndex = new ObservableValue<number>(-1);

  constructor () {
  }
}
