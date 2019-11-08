import { IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiModelProperty()
  @IsString()
  firebaseId: string;

  @ApiModelProperty()
  @IsString()
  name: string;
}
