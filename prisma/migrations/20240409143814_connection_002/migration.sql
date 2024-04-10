/*
  Warnings:

  - A unique constraint covering the columns `[followedById,followingId]` on the table `Connections` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Connections_followedById_followingId_key" ON "Connections"("followedById", "followingId");
