export class Product {
  _id?: string;
  name: string;
  type: string;
  price: number;
  image: string;
  description: string;
  category: string;
  id: any;

  constructor(
    name: string,
    type: string,
    price: number,
    image: string,
    description: string,
    category: string,
    _id?: string
  ) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.image = image;
    this.description = description;
    this.category = category;
    if (_id) this._id = _id;
  }
}
