export class CreateUserDto {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birth: Date;
  type: number;
  photo: string;
  phone?: string;
}
