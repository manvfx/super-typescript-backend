import IUser from "./user.interface";
import { UserRepository } from "./user.repository";

export default class UserService {
  userRepository: UserRepository = new UserRepository();

  public async save(user: IUser) {
    console.log(`Salvando usuário ${user.email}`); //getemail
    return this.userRepository.save(user);
  }

  public async findAll(user: IUser) {
    return this.userRepository.find(user);
  }
}
