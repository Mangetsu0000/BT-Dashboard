import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateBranchDto } from './dto';

@Injectable()
export class BranchService {
  constructor(private prismaService: PrismaClient) {}
  getBranches() {
    return this.prismaService.branch.findMany();
  }
  async getBranchById(branchId: number) {
    return this.prismaService.branch.findFirst({
      where: {
        id: branchId,
      },
    });
  }

  //   async createBranch(userId: number, dto: CreateBranchDto) {
  //     const branch = await this.prismaService.branch.create({
  //       data: {
  //         adminId: userId,
  //         ...dto,
  //       },
  //     });
  //     return branch;
  //   }

  async updateBranchById() {}

  async deleteBranchById() {}
}
