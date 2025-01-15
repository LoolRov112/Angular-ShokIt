
export class Product {
  id: number;
  name: string;
  type: string;
  price: number;
  img: string;
  description: string;
  category: string;

  constructor(
    id: number,
    name: string,
    type: string,
    price: number,
    img: string,
    description: string,
    category: string
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.img = img;
    this.description = description;
    this.category = category;
  }
}
