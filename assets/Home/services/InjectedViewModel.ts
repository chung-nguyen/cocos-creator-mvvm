import APIService from './APIService';
import GlobalStateRepo from './GlobalStateRepo';
import UserDataRepo from './UserDataRepo';

export default class InjectedViewModel {
  protected apiService: APIService;
  protected userDataRepo: UserDataRepo;
  protected globalStateRepo: GlobalStateRepo;

  constructor () {
    globalThis.serviceLocator.inject(this);
  }
}
