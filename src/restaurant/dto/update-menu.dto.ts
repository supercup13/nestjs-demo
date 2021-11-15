import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  Length,
  Validate,
} from 'class-validator';

export class UpdateMenuDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  restaurent_id: number;
  description: string;
  is_active: boolean;
}
