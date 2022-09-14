import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBranchDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  bc: number;

  @IsString()
  @IsNotEmpty()
  ttIpAddress: String;

  @IsString()
  @IsNotEmpty()
  orangeIpAddress: String;
}
