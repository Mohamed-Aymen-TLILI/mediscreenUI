import {FormControl, ɵValue} from "@angular/forms";

export class Patient {
  id!: number;
  firstName!: string;
  lastName!: string;
  gender!: string;
  address!: string;
  phone!: string;
  birthDate!: string;

  constructor(obj?: { firstName?: ɵValue<FormControl<string | null>>; lastName?: ɵValue<FormControl<string | null>>; address?: ɵValue<FormControl<string | null>>; gender?: ɵValue<FormControl<string | null>>; phone?: ɵValue<FormControl<string | null>>; id: any; birthDate?: ɵValue<FormControl<string | null>> }) {
    Object.assign(this, obj);
  }

}
