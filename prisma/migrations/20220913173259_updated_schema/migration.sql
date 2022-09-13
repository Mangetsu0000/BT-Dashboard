/*
  Warnings:

  - You are about to drop the column `ca` on the `branches` table. All the data in the column will be lost.
  - Added the required column `bc` to the `branches` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "branches" DROP COLUMN "ca",
ADD COLUMN     "bc" INTEGER NOT NULL;
