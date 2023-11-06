export default class APIService {
  constructor() {
  }

  public async getIP() {
    const response = await fetch('https://api.ipify.org?format=json');
    const result = await response.json();
    return result.ip;
  }
}
