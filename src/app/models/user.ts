export class User {
  name: string;
  mail: string;
  bitrhDate: string;
  gender: string;
  image: string;
  password: string;
  isAdmin: boolean;
  constructor(
    name: string,
    mail: string,
    bitrhDate: string,
    gender: string,
    password: string
  ) {
    this.name = name;
    this.mail = mail;
    this.bitrhDate = bitrhDate;
    this.gender = gender;
    this.gender === 'male'
      ? (this.image = '/assets/images/maleLogo.avif')
      : (this.image = '/assets/images/femaleLogo.jpg');
    this.password = password;
    this.isAdmin = false;
  }

  set img(img: string) {
    this.image = img;
  }
}
