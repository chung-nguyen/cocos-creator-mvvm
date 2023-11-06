import { _decorator, Button, Component, EditBox, Node } from 'cc';
import NavigationViewModel from '../viewmodels/NavigationViewModel';
import ViewContext from '../../Utils/ViewContext';
const { ccclass, property } = _decorator;

@ccclass('NavigationView')
export class NavigationView extends ViewContext {
  private _navigationViewModel: NavigationViewModel;

  protected onLoad(): void {
    this._navigationViewModel = new NavigationViewModel();
  }

  protected start(): void {
    this._navigationViewModel.setTabIndex(0);
  }

  public onTabButton1() {
    this._navigationViewModel.setTabIndex(0);
  }

  public onTabButton2() {
    this._navigationViewModel.setTabIndex(1);
  }
}
