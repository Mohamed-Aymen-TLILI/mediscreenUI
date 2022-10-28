
export class Patient {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  adress: string;
  phone: string;
  birthDate: string;
  constructor( id: number, firstName: string, lastName: string, gender: string, adress: string, phone: string, birthDate: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.adress = adress;
    this.phone = phone;
    this.birthDate = birthDate;
  }
}
