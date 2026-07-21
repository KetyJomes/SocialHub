/*
  Warnings:

  - You are about to drop the column `AvaiableResult` on the `test` table. All the data in the column will be lost.
  - Added the required column `AvailableResult` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Frequency` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `class` ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `test` DROP COLUMN `AvaiableResult`,
    ADD COLUMN `AvailableResult` BOOLEAN NOT NULL,
    ADD COLUMN `Frequency` ENUM('unique', 'Mensal', 'Bimestral', 'Trimestral', 'Anual') NOT NULL,
    MODIFY `type` ENUM('Self', 'Instructor', 'Group', 'Lider', 'Class') NOT NULL;
