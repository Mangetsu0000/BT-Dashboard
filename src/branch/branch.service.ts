import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBranchDto, UpdateBranchDto } from './dto';

@Injectable()
export class BranchService {
  constructor(private prisma: PrismaService) {}
  getBranches() {
    return this.prisma.branch.findMany();
  }

  getBranchById(branchId: number) {
    return this.prisma.branch.findFirst({
      where: {
        id: branchId,
      },
    });
  }

  async createBranch(userId: number, dto: CreateBranchDto) {
    const branch = await this.prisma.branch.create({
      data: {
        userId,
        ...dto,
      },
    });
    return branch;
  }

  async updateBranchById(branchId: number, dto: UpdateBranchDto) {
    const branch = await this.prisma.branch.findUnique({
      where: {
        id: branchId,
      },
    });

    // check if branch exists
    if (!branch) throw new ForbiddenException('Branch does not exist');

    return this.prisma.branch.update({
      where: {
        id: branchId,
      },
      data: {
        ...dto,
      },
    });
  }

  async deleteBranchById(branchId: number) {
    const branch = await this.prisma.branch.findUnique({
      where: {
        id: branchId,
      },
    });

    // check if branch exists
    if (!branch) throw new ForbiddenException('Access to resources denied');

    return this.prisma.branch.delete({
      where: {
        id: branchId,
      },
    });
  }
}
