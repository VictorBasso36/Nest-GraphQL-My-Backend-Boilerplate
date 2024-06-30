-- AlterTable
ALTER TABLE "Comment" ADD COLUMN     "removed" BOOLEAN DEFAULT false,
ADD COLUMN     "serviceType" TEXT;
