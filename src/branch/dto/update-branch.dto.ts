import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBranchDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  bc?: number;

  @IsString()
  @IsOptional()
  ttIpAddress?: string;

  @IsString()
  @IsOptional()
  orangeIpAddress?: string;
}
