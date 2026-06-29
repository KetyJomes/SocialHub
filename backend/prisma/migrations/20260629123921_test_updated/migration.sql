/*
  Warnings:

  - You are about to drop the column `idTest` on the `user` table. All the data in the column will be lost.
  - Added the required column `idTest` to the `User_Test` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_idTest_fkey`;

-- DropIndex
DROP INDEX `User_idTest_fkey` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `idTest`;

-- AlterTable
ALTER TABLE `user_test` ADD COLUMN `idTest` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `User_Test` ADD CONSTRAINT `User_Test_idTest_fkey` FOREIGN KEY (`idTest`) REFERENCES `Test`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
