import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBranchDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Type(() => Number)
  bc: number;

  @IsString()
  @IsNotEmpty()
  ttIpAddress: string;

  @IsString()
  @IsNotEmpty()
  orangeIpAddress: string;
}
