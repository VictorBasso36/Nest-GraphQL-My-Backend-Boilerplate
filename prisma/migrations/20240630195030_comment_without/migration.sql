-- CreateTable
CREATE TABLE "CommentWithoutCompany" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "rating" DOUBLE PRECISION,
    "title" TEXT,
    "serviceType" TEXT,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "CommentWithoutCompany_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CommentWithoutCompany" ADD CONSTRAINT "CommentWithoutCompany_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
