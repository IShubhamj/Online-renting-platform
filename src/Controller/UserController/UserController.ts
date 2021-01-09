import UserService from "../../Services/UserService/UserService";

class UserController {
  public static getInstance(): UserController {
    if (!UserController.instance) {
      UserController.instance = new UserController();
    }
    return UserController.instance;
  }
  private static instance: UserController;

  public async createUser({ body }: any) {
    try {
      return await UserService.addUsers(body);
    } catch (error) {
      throw error;
    }
  }

  public async updateUser({ body, query }: any) {
    try {
      const _id = query.id;
      return await UserService.updateUser(_id, body);
    } catch (error) {
      throw error;
    }
  }

  public async deleteUser({ query }: any) {
    try {
      const { id } = query;
      return await UserService.deleteUser(id);
    } catch (error) {
      throw error;
    }
  }
}

export default UserController.getInstance();
