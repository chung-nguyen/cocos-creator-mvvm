import { _decorator, Button, EditBox } from 'cc';
import ViewContext from '../../Utils/ViewContext';
import { Tab2ViewModel } from '../viewmodels/Tab2ViewModel';
const { ccclass, property } = _decorator;

@ccclass('Tab2View')
export class Tab2View extends ViewContext {
  static MY_TAB_INDEX = 1;

  @property(EditBox) myEditBox: EditBox = null;
  @property(Button) button1: Button = null;

  private tab2ViewModel: Tab2ViewModel;

  protected onLoad(): void {
    this.tab2ViewModel = new Tab2ViewModel(this);
  }

  protected onEnable(): void {
    this.observe(this.tab2ViewModel.content, (val) => {
      if (this.myEditBox.string !== val) {
        this.myEditBox.string = val;
      }
    });

    this.observe(this.tab2ViewModel.isLoading, (val) => {
      this.button1.interactable = !val;
      this.myEditBox.enabled = !val;
    });

    this.observe(this.tab2ViewModel.tabIndex, (val) => {
      if (val === Tab2View.MY_TAB_INDEX) {
        if (this.node.active) {
          return;
        }
        this.node.active = true;
      } else {
        if (!this.node.active) {
          return;
        }
        this.node.active = false;
      }
    });

    this.tab2ViewModel.fetchCacheContent();
  }

  start() {
  }

  update(deltaTime: number) {

  }

  public onFetchButtonClick() {
    this.tab2ViewModel.fetchContent();
  }

  public onSaveContent() {
    this.tab2ViewModel.saveContent();
  }
}
