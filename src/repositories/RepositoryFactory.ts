import UsersRepository from './UsersRepository';
import UsersApi from '@/api/UsersApi';
import ExperiencesRepository from './ExperiencesRepository';
import ExperiencesApi from '@/api/ExperiencesApi';

export default class RepositoryFactory {
  public static createUsersRpository() {
    return new UsersRepository(new UsersApi());
  }
  public static createExperiencesRpository() {
    return new ExperiencesRepository(new ExperiencesApi());
  }
}
