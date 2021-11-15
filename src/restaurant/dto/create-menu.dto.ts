import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  Length,
  Validate,
} from 'class-validator';

export class CreateMenuDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  restaurent_id: number;
  description: string;
  is_active: boolean;
}
