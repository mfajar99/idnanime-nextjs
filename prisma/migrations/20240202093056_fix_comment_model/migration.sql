/*
  Warnings:

  - You are about to drop the column `usera_email` on the `comment` table. All the data in the column will be lost.
  - Added the required column `user_email` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment` DROP COLUMN `usera_email`,
    ADD COLUMN `user_email` VARCHAR(191) NOT NULL;
