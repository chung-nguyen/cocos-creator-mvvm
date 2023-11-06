import ObservableValue from "../../Utils/ObservableValue";
import ViewContext from '../../Utils/ViewContext';
import InjectedViewModel from '../services/InjectedViewModel';

export class Tab1ViewModel extends InjectedViewModel {
  public content: ObservableValue<string>;
  public isLoading: ObservableValue<boolean>;
  public lastError: ObservableValue<string>;
  public tabIndex: ObservableValue<number>;

  private _context: ViewContext;

  constructor (context: ViewContext) {
    super();

    this._context = context;

    this.content = this.userDataRepo.content;
    this.tabIndex = this.globalStateRepo.tabIndex;
    this.isLoading = new ObservableValue<boolean>(false);
    this.lastError = new ObservableValue<string>('');
  }

  public async fetchContent () {
    try {
      this.isLoading.value = true;
      this.content.value = await this.apiService.getIP();
    } catch (ex) {
      console.error(ex);
      this.lastError = ex.toString();
    } finally {
      this.isLoading.value = false;
    }
  }

  public saveContent () {
    this.userDataRepo.save();
  }

  public async fetchCacheContent (invalidate?: boolean) {
    if (invalidate) {
      this.userDataRepo.invalidate();
    }
    await this.userDataRepo.load();
  }
}
