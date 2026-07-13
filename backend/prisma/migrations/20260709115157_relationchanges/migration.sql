/*
  Warnings:

  - You are about to alter the column `scale` on the `answers` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `Int`.
  - You are about to drop the column `idAlternative` on the `skill` table. All the data in the column will be lost.
  - You are about to drop the column `idAnswer` on the `skill` table. All the data in the column will be lost.
  - You are about to drop the column `idSkill` on the `test` table. All the data in the column will be lost.
  - You are about to alter the column `Type` on the `test` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - You are about to drop the column `idAnswer` on the `user_test` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Scale` to the `Alternatives` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idSkill` to the `Alternatives` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idSkill` to the `Answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idUserTest` to the `Answers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idTest` to the `Skill` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `skill` DROP FOREIGN KEY `Skill_idAlternative_fkey`;

-- DropForeignKey
ALTER TABLE `skill` DROP FOREIGN KEY `Skill_idAnswer_fkey`;

-- DropForeignKey
ALTER TABLE `test` DROP FOREIGN KEY `Test_idSkill_fkey`;

-- DropForeignKey
ALTER TABLE `user_test` DROP FOREIGN KEY `User_Test_idAnswer_fkey`;

-- DropIndex
DROP INDEX `Skill_idAlternative_fkey` ON `skill`;

-- DropIndex
DROP INDEX `Skill_idAnswer_fkey` ON `skill`;

-- DropIndex
DROP INDEX `Test_idSkill_fkey` ON `test`;

-- DropIndex
DROP INDEX `User_Test_idAnswer_fkey` ON `user_test`;

-- AlterTable
ALTER TABLE `alternatives` ADD COLUMN `Scale` INTEGER NOT NULL,
    ADD COLUMN `idSkill` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `answers` ADD COLUMN `idSkill` INTEGER NOT NULL,
    ADD COLUMN `idUserTest` INTEGER NOT NULL,
    MODIFY `scale` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `skill` DROP COLUMN `idAlternative`,
    DROP COLUMN `idAnswer`,
    ADD COLUMN `idTest` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `test` DROP COLUMN `idSkill`,
    MODIFY `Type` ENUM('Self', 'Instructor', 'Group') NOT NULL;

-- AlterTable
ALTER TABLE `user_test` DROP COLUMN `idAnswer`;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `User`(`email`);

-- AddForeignKey
ALTER TABLE `Answers` ADD CONSTRAINT `Answers_idUserTest_fkey` FOREIGN KEY (`idUserTest`) REFERENCES `User_Test`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Answers` ADD CONSTRAINT `Answers_idSkill_fkey` FOREIGN KEY (`idSkill`) REFERENCES `Skill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_idTest_fkey` FOREIGN KEY (`idTest`) REFERENCES `Test`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Alternatives` ADD CONSTRAINT `Alternatives_idSkill_fkey` FOREIGN KEY (`idSkill`) REFERENCES `Skill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
