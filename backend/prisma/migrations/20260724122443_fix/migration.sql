/*
  Warnings:

  - Added the required column `Feedback` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `test` ADD COLUMN `Feedback` VARCHAR(191) NOT NULL,
    MODIFY `Frequency` ENUM('unique', 'Mensal', 'Bimestral', 'Trimestral', 'Semestral', 'Anual') NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `pfp` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user_test` MODIFY `feedback` VARCHAR(191) NULL;
