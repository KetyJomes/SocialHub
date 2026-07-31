-- AlterTable
ALTER TABLE `user` MODIFY `role` ENUM('Student', 'Leader', 'ADM', 'Manager') NOT NULL DEFAULT 'Student';
