import UsersApi from '@/api/UsersApi';

export default class UsersRepository {
  private api;
  public constructor(api: UsersApi) {
    this.api = api;
  }

  public async find(userId: string) {
    return this.api.fetch(userId);
  }
}
