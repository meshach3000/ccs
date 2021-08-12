import { Role } from './role';

export class User {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  postion: string;
  roles?: Role[];
  token?: string;
}
