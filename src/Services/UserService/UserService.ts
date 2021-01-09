import bcrypt from "bcrypt";

import { UserRepository } from "../../Repositories/UserRepository/Repository";
import { IUserInput } from "../../Repositories/UserRepository/Entities/Entities";

class UserService {
  private static instance: UserService;
  static getInstance() {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }
  private userRepository: UserRepository;
  constructor() {
    this.userRepository = new UserRepository();
  }

  public async addUsers({ password, ...rest }: IUserInput) {
    try {
      await this.userRepository.create({
        password: await bcrypt.hash(password, 10),
        ...rest,
      });
      return {
        msg: "User Onboard successfully",
      };
    } catch (error) {
      throw error;
    }
  }

  public async updateUser(userData: IUserInput) {
    try {
      await this.userRepository.update({ _id: userData.id }, userData);
      return {
        msg: "User ipdated successfully",
      };
    } catch (error) {
      throw error;
    }
  }

  public async deleteUser(id: string) {
    try {
      return await this.userRepository.delete({ _id: id });
    } catch (error) {
      throw error;
    }
  }
}

export default UserService.getInstance();
