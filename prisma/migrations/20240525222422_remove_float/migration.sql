/*
  Warnings:

  - You are about to drop the column `approved` on the `CommentResponse` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CommentResponse" DROP COLUMN "approved";

-- AlterTable
ALTER TABLE "Company" ALTER COLUMN "rating" SET DATA TYPE TEXT;
