-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "approved" DROP NOT NULL;

-- AlterTable
ALTER TABLE "CommentResponse" ADD COLUMN     "approved" BOOLEAN DEFAULT false;

-- AlterTable
ALTER TABLE "Company" ADD COLUMN     "approved" BOOLEAN DEFAULT false,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "working" TEXT;
