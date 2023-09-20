
export class CreateClientDto {
  name: string;
  listId: number;
  cpf: string;
  phone?: string;
  email?: string;
  birth?: Date;
  photo?: string;
  userId: number
}
