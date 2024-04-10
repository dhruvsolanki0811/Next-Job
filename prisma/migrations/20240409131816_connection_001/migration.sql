/*
  Warnings:

  - A unique constraint covering the columns `[jobProfileId,jobSeekerId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "ConnectionStatus" AS ENUM ('PENDING', 'ACCEPTED');

-- CreateTable
CREATE TABLE "Connections" (
    "followedById" INTEGER NOT NULL,
    "followingId" INTEGER NOT NULL,
    "status" "ConnectionStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Connections_pkey" PRIMARY KEY ("followingId","followedById")
);

-- CreateIndex
CREATE UNIQUE INDEX "Application_jobProfileId_jobSeekerId_key" ON "Application"("jobProfileId", "jobSeekerId");

-- AddForeignKey
ALTER TABLE "Connections" ADD CONSTRAINT "Connections_followedById_fkey" FOREIGN KEY ("followedById") REFERENCES "JobSeeker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Connections" ADD CONSTRAINT "Connections_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "JobSeeker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
