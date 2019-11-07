import { IsString, ValidateNested } from 'class-validator';
import { UserDTO } from '../../users/dto/user.dto';

export class ShopDTO {
  @IsString()
  psxId: string;

  @ValidateNested()
  user: UserDTO;
}
