export class Product {
  id: number;
  name: string;
  type: string;
  price: number;
  image: string;
  description: string;
  category: string;

  constructor(
    id: number,
    name: string,
    type: string,
    price: number,
    image: string,
    description: string,
    category: string
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.image = image;
    this.description = description;
    this.category = category;
  }
}
