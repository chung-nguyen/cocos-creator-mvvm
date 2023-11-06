import ObservableValue from "../../Utils/ObservableValue";
import InjectedViewModel from '../services/InjectedViewModel';

export default class NavigationViewModel extends InjectedViewModel {
  public tabIndex = new ObservableValue<number>(0);

  constructor () {
    super();
    this.tabIndex = this.globalStateRepo.tabIndex;
  }

  public setTabIndex (index: number) {
    this.tabIndex.value = index;
  }
}
