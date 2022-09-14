import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBranchDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  bc?: number;

  @IsString()
  @IsOptional()
  ttIpAddress?: String;

  @IsString()
  @IsOptional()
  orangeIpAddress?: String;
}
