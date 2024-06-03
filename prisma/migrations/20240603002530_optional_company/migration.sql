-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_companyId_fkey";

-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "companyId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE SET NULL ON UPDATE CASCADE;
