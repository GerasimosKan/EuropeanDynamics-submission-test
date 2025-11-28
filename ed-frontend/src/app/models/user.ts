import { Address } from './address';

export interface User {
  id?: number;
  name: string;
  surname: string;
  gender: 'M' | 'F';
  birthdate: string;
  addresses: Address[];
}
