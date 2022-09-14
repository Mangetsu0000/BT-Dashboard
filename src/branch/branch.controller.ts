import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { BranchService } from './branch.service';
import { CreateBranchDto, UpdateBranchDto } from './dto';

@Controller('branch')
export class BranchController {
  constructor(private branchService: BranchService) {}
  @Get()
  getBranches() {
    return this.branchService.getBranches();
  }

  // @Post()
  // createBranch(@GetUser('id') userId: number, @Body() dto: CreateBranchDto) {
  //   return this.branchService.createBranch(userId, dto);
  // }

  @Get(':id')
  getBranchById(@Param('id', ParseIntPipe) branchId: number) {}

  @Patch(':id')
  updateBranchById(
    @Param('id', ParseIntPipe) branchId: number,
    @Body() dto: UpdateBranchDto,
  ) {}

  @Delete(':id')
  deleteBranchById(
    @GetUser('id') userId: number,
    @Param('id', ParseIntPipe) branchId: number,
  ) {}
}
