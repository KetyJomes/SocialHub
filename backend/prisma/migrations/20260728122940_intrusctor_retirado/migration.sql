/*
  Warnings:

  - The values [Instructor] on the enum `Test_type` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `test` MODIFY `type` ENUM('Self', 'Group', 'Lider', 'Class') NOT NULL;
