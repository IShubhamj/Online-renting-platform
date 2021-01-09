import { ItemRepository } from "../Repositories/ItemsRepository/Repository";
import { items } from "./Data/items";
class Seed {
  private itemRepo = new ItemRepository();
  constructor() {
    this.itemRepo = new ItemRepository();
  }
  public async start() {
    try {
      const count = await this.itemRepo.count();
      if (!count) {
        console.log("Seeding started...");
        await this.itemRepo.create(items);
        console.log("Seeding done");
      }
    } catch (error) {
      console.log("Error in seeding", error);
    }
  }
}

export default new Seed();
