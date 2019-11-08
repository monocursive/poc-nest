import { IsString, ValidateNested } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';
import { UserDTO } from '../../users/dto/user.dto';

export class ShopDTO {
  @ApiModelProperty()
  @IsString()
  psxId: string;

  @ApiModelProperty()
  @ValidateNested()
  user: UserDTO;
}
