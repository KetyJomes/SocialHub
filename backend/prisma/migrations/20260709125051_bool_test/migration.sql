/*
  Warnings:

  - You are about to drop the column `Date` on the `test` table. All the data in the column will be lost.
  - You are about to drop the column `Grade` on the `test` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `test` table. All the data in the column will be lost.
  - Added the required column `AvaiableResult` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `finalDate` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `grade` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Test` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `test` DROP COLUMN `Date`,
    DROP COLUMN `Grade`,
    DROP COLUMN `Type`,
    ADD COLUMN `AvaiableResult` BOOLEAN NOT NULL,
    ADD COLUMN `finalDate` DATETIME(3) NOT NULL,
    ADD COLUMN `grade` INTEGER NOT NULL,
    ADD COLUMN `startDate` DATETIME(3) NOT NULL,
    ADD COLUMN `type` ENUM('Self', 'Instructor', 'Group') NOT NULL;
