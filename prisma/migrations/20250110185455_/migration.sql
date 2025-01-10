/*
  Warnings:

  - You are about to drop the column `service` on the `Inquiry` table. All the data in the column will be lost.
  - You are about to drop the column `sns` on the `Inquiry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Inquiry` DROP COLUMN `service`,
    DROP COLUMN `sns`;
