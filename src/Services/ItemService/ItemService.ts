import { NotFoundError } from "../../Entities";
import { SuccessResponse } from "../../Entities/Responses";
import { ItemRepository } from "../../Repositories/ItemsRepository/Repository";
import { IUserInput } from "../../Repositories/UserRepository/Entities/Entities";

class ItemService {
  private static instance: ItemService;
  static getInstance() {
    if (!ItemService.instance) {
      ItemService.instance = new ItemService();
    }
    return ItemService.instance;
  }
  private itemRepository: ItemRepository;
  constructor() {
    this.itemRepository = new ItemRepository();
  }

  public async addItem(item) {
    try {
      await this.itemRepository.create(item);
      return {
        msg: "Item created successfully",
      };
    } catch (error) {
      throw error;
    }
  }

  public async updateItem(_id: string, itemData) {
    try {
      const item = await this.isRented(_id, "update");
      if (!item.status) {
        return {
          msg: item.msg,
        };
      }
      await this.itemRepository.update({ _id }, itemData);
      return {
        msg: "Item updated successfully",
      };
    } catch (error) {
      throw error;
    }
  }

  public async deleteItem(_id: string) {
    try {
      const item = await this.isRented(_id, "delete");
      if (!item.status) {
        return {
          msg: item.msg,
        };
      }
      await this.itemRepository.delete({ _id });
      return new SuccessResponse(null, {
        message: "Item deleted successfully",
      });
    } catch (error) {
      throw error;
    }
  }

  public async isRented(_id: string, operation: string) {
    try {
      const item = await this.itemRepository.findOne(_id);
      console.log(item);
      if (!item) {
        throw new NotFoundError([{ msg: "Item not found" }]);
      } else if (item && item.rented.to) {
        return {
          status: false,
          msg: `Since this item is rented to some user, you are not allowed to ${operation} this item`,
        };
      } else {
        return {
          status: true,
        };
      }
    } catch (error) {
      throw error;
    }
  }
}

export default ItemService.getInstance();
