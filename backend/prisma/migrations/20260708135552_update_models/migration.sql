/*
  Warnings:

  - You are about to drop the column `Name` on the `skill` table. All the data in the column will be lost.
  - You are about to drop the column `idQuestion` on the `skill` table. All the data in the column will be lost.
  - You are about to drop the column `idQuestion` on the `test` table. All the data in the column will be lost.
  - You are about to drop the `questions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Description` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Title` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idAlternative` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idAnswer` to the `Skill` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idSkill` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idAnswer` to the `User_Test` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `questions` DROP FOREIGN KEY `Questions_idAnswer_fkey`;

-- DropForeignKey
ALTER TABLE `skill` DROP FOREIGN KEY `Skill_idQuestion_fkey`;

-- DropForeignKey
ALTER TABLE `test` DROP FOREIGN KEY `Test_idQuestion_fkey`;

-- DropIndex
DROP INDEX `Skill_idQuestion_fkey` ON `skill`;

-- DropIndex
DROP INDEX `Test_idQuestion_fkey` ON `test`;

-- AlterTable
ALTER TABLE `skill` DROP COLUMN `Name`,
    DROP COLUMN `idQuestion`,
    ADD COLUMN `Description` VARCHAR(191) NOT NULL,
    ADD COLUMN `Title` VARCHAR(191) NOT NULL,
    ADD COLUMN `idAlternative` INTEGER NOT NULL,
    ADD COLUMN `idAnswer` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `test` DROP COLUMN `idQuestion`,
    ADD COLUMN `idSkill` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user_test` ADD COLUMN `idAnswer` INTEGER NOT NULL;

-- DropTable
DROP TABLE `questions`;

-- CreateTable
CREATE TABLE `Alternatives` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_Test` ADD CONSTRAINT `User_Test_idAnswer_fkey` FOREIGN KEY (`idAnswer`) REFERENCES `Answers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Test` ADD CONSTRAINT `Test_idSkill_fkey` FOREIGN KEY (`idSkill`) REFERENCES `Skill`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_idAnswer_fkey` FOREIGN KEY (`idAnswer`) REFERENCES `Answers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_idAlternative_fkey` FOREIGN KEY (`idAlternative`) REFERENCES `Alternatives`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
