import { IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  firebaseId: string;

  @IsString()
  name: string;
}
