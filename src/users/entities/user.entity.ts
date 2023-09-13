export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  status: number;
  type: number;
  password: string;
  photo?: string;
  phone?: string;
  birth: Date;
  createdAt: Date;
  updateAt: Date;
}
