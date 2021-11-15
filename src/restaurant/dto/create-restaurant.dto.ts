import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  Length,
  Validate,
} from 'class-validator';

export class CreateRestaurantDto {
  @IsNotEmpty()
  name: string;

  description: string;
  is_active: boolean;
  address: string;
}
