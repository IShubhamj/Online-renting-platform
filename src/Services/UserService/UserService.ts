import bcrypt from "bcrypt";

import { UserRepository } from "../../Repositories/UserRepository/Repository";
import { IUserInput } from "../../Repositories/UserRepository/Entities/Entities";
import { SuccessResponse } from "../../Entities/Responses";
import { NotFoundError } from "../../Entities";

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
        ...rest
      });
      return {
        msg: "User Onboard successfully"
      };
    } catch (error) {
      throw error;
    }
  }

  public async updateUser(_id: string, userData: IUserInput) {
    try {
      const user = this.userRepository.fineOne(_id);
      if (user) {
        await this.userRepository.update({ _id }, userData);
        return {
          msg: "User updated successfully"
        };
      }
      throw new NotFoundError([{ msg: "User does not exist" }]);
    } catch (error) {
      throw error;
    }
  }

  public async deleteUser(id: string) {
    try {
      await this.userRepository.delete({ _id: id });
      return new SuccessResponse(null, {
        message: "User deleted successfully"
      });
    } catch (error) {
      throw error;
    }
  }
}

export default UserService.getInstance();
