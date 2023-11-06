import { _decorator, Button, EditBox } from 'cc';
import { Tab1ViewModel } from '../viewmodels/Tab1ViewModel';
import ViewContext from '../../Utils/ViewContext';
const { ccclass, property } = _decorator;

@ccclass('Tab1View')
export class Tab1View extends ViewContext {
  static MY_TAB_INDEX = 0;

  @property(EditBox) myEditBox: EditBox = null;
  @property(Button) button1: Button = null;
  @property(Button) button2: Button = null;

  private tab1ViewModel: Tab1ViewModel;

  protected onLoad(): void {
    this.tab1ViewModel = new Tab1ViewModel(this);
  }

  protected onEnable(): void {
    this.observe(this.tab1ViewModel.content, (val: string) => {
      if (this.myEditBox.string !== val) {
        this.myEditBox.string = val;
      }
    });

    this.observe(this.tab1ViewModel.isLoading, (val) => {
      this.button1.interactable = !val;
      this.button2.interactable = !val;
      this.myEditBox.enabled = !val;
    });

    this.observe(this.tab1ViewModel.tabIndex, (val) => {
      if (val === Tab1View.MY_TAB_INDEX) {
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

    this.tab1ViewModel.fetchCacheContent();
  }

  update(deltaTime: number) {

  }

  public onFetchButtonClick() {
    this.tab1ViewModel.fetchContent();
  }

  public onTextChanged (e) {
    this.tab1ViewModel.content.value = e;
  }

  public onSaveContent() {
    this.tab1ViewModel.saveContent();
  }
}
