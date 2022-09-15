import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from 'src/auth/decorator';
import { JwtGuard } from 'src/auth/guard';
import { BranchService } from './branch.service';

import { CreateBranchDto, UpdateBranchDto } from './dto';

@Controller('branches')
export class BranchController {
  constructor(private branchService: BranchService) {}

  @Get('all')
  getBranches() {
    return this.branchService.getBranches();
  }

  @UseGuards(JwtGuard)
  @Post()
  createBranch(
    @GetUser('id', ParseIntPipe) userId: number,
    @Body() dto: CreateBranchDto,
  ) {
    return this.branchService.createBranch(userId, dto);
  }

  @UseGuards(JwtGuard)
  @Get(':id')
  getBranchById(@Param('id', ParseIntPipe) branchId: number) {
    return this.branchService.getBranchById(branchId);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  updateBranchById(
    @Param('id', ParseIntPipe) branchId: number,
    @Body() dto: UpdateBranchDto,
  ) {}

  @Delete(':id')
  deleteBranchById(@Param('id', ParseIntPipe) branchId: number) {
    this.branchService.deleteBranchById(branchId);
  }
}
