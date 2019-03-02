import ExperiencesApi, { IRegisterRequest } from '@/api/ExperiencesApi';

export default class ExperiencesRepository {
  private api;
  public constructor(api: ExperiencesApi) {
    this.api = api;
  }

  public async register(userId: string, title: string, description: string, progress: number) {
    const requestParams: IRegisterRequest = {
      user_id: userId,
      title,
      description,
      progress,
    };

    return this.api.register(requestParams);
  }
}
