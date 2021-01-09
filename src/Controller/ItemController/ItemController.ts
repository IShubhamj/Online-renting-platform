import ItemService from "../../Services/ItemService/ItemService";

class ItemController {
  public static getInstance(): ItemController {
    if (!ItemController.instance) {
      ItemController.instance = new ItemController();
    }
    return ItemController.instance;
  }
  private static instance: ItemController;

  public async createItem({ body }: any) {
    try {
      return await ItemService.addItem(body);
    } catch (error) {
      throw error;
    }
  }

  public async updateItem({ query, body }: any) {
    try {
      const _id = query.id;
      return await ItemService.updateItem(_id, body);
    } catch (error) {
      throw error;
    }
  }

  public async deleteItem({ query }: any) {
    try {
      const _id = query.id;
      return await ItemService.deleteItem(_id);
    } catch (error) {
      throw error;
    }
  }
}

export default ItemController.getInstance();
