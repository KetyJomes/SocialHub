/*
  Warnings:

  - The values [Aluno,Lider,Gestor] on the enum `User_role` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `idAnswer` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idTest` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `idAnswer` INTEGER NOT NULL,
    ADD COLUMN `idTest` INTEGER NOT NULL,
    MODIFY `role` ENUM('Student', 'Leader', 'ADM', 'Manager') NOT NULL;

-- CreateTable
CREATE TABLE `User_Test` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idEvaluated` INTEGER NOT NULL,
    `idEvaluator` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Test` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Content` VARCHAR(191) NOT NULL,
    `Date` DATETIME(3) NOT NULL,
    `Grade` INTEGER NOT NULL,
    `Type` VARCHAR(191) NOT NULL,
    `idQuestion` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Answers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `value` VARCHAR(191) NOT NULL,
    `scale` ENUM('BLUE', 'GREEN', 'GREY', 'YELLOW', 'RED') NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Questions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Sten` VARCHAR(191) NOT NULL,
    `idAnswer` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Skill` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(191) NOT NULL,
    `idQuestion` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_idAnswer_fkey` FOREIGN KEY (`idAnswer`) REFERENCES `Answers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_idTest_fkey` FOREIGN KEY (`idTest`) REFERENCES `Test`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Test` ADD CONSTRAINT `User_Test_idEvaluated_fkey` FOREIGN KEY (`idEvaluated`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Test` ADD CONSTRAINT `User_Test_idEvaluator_fkey` FOREIGN KEY (`idEvaluator`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Test` ADD CONSTRAINT `Test_idQuestion_fkey` FOREIGN KEY (`idQuestion`) REFERENCES `Questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Questions` ADD CONSTRAINT `Questions_idAnswer_fkey` FOREIGN KEY (`idAnswer`) REFERENCES `Answers`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Skill` ADD CONSTRAINT `Skill_idQuestion_fkey` FOREIGN KEY (`idQuestion`) REFERENCES `Questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
