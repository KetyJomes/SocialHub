/*
  Warnings:

  - Added the required column `pfp` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feedback` to the `User_Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `pfp` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user_test` ADD COLUMN `feedback` VARCHAR(191) NOT NULL;
