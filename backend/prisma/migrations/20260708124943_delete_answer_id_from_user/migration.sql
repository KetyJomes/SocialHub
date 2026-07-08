/*
  Warnings:

  - You are about to drop the column `idAnswer` on the `user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_idAnswer_fkey`;

-- DropIndex
DROP INDEX `User_idAnswer_fkey` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `idAnswer`;
