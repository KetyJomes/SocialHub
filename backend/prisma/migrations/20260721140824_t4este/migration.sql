-- DropForeignKey
ALTER TABLE `user` DROP FOREIGN KEY `User_idClass_fkey`;

-- DropIndex
DROP INDEX `User_idClass_fkey` ON `user`;

-- AlterTable
ALTER TABLE `user` MODIFY `idClass` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_idClass_fkey` FOREIGN KEY (`idClass`) REFERENCES `Class`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
