import {
  IsNumber,
  IsString,
  IsNotEmpty,
  IsDecimal,
  IsOptional,
  IsDate,
} from 'class-validator';

export class CreateServicesDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  type: string;

  @IsDecimal({ decimal_digits: '2' })
  @IsNotEmpty()
  price: number[];

  @IsNumber()
  @IsOptional()
  quantity?: number;

  @IsOptional()
  @IsDecimal()
  discount?: number;

  @IsNumber()
  userId: number;

  @IsDate()
  createdAt: Date;

  @IsDate()
  updateAt: Date;
}
