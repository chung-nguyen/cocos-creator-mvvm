import APIService from './APIService';
import GlobalStateRepo from './GlobalStateRepo';
import UserDataRepo from './UserDataRepo';

export default class ServiceLocator {
  public apiService: APIService;
  public globalStateRepo: GlobalStateRepo;
  public userDataRepo: UserDataRepo;

  constructor() {
    this.apiService = new APIService();
    this.userDataRepo = new UserDataRepo();
    this.globalStateRepo = new GlobalStateRepo();
  }

  public inject(obj: any, services?: string[]) {
    if (services && Array.isArray(services)) {
      for (const service of services) {
        obj[service] = this[service];
      }
    } else {
      for (const [key, value] of Object.entries(this)) {
        obj[key] = value;
      }
    }
  }
}

const serviceLocatorSingleton = new ServiceLocator();
globalThis.serviceLocator = serviceLocatorSingleton;
