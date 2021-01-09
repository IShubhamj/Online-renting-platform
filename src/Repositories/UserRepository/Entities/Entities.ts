export interface IItem {
  name: string;
  rent: number;
  price: number;
  manufacture: Date;
  actualCost: number;
}

export interface IUserInput {
  id?: string;
  name: string;
  email: string;
  password: string;
  items: IItem[];
}
