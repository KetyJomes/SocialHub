-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `EDV` INTEGER NOT NULL,
    `role` ENUM('Aluno', 'Lider', 'ADM', 'Gestor') NOT NULL,
    `idClass` INTEGER NOT NULL,

    UNIQUE INDEX `User_EDV_key`(`EDV`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `Course` VARCHAR(191) NOT NULL,
    `period` VARCHAR(191) NOT NULL,
    `avarageScore` INTEGER NOT NULL,
    `idPIC` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_idClass_fkey` FOREIGN KEY (`idClass`) REFERENCES `Class`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Class` ADD CONSTRAINT `Class_idPIC_fkey` FOREIGN KEY (`idPIC`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
