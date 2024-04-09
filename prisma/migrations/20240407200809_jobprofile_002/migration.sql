/*
  Warnings:

  - The `skillsRequired` column on the `JobProfile` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `location` to the `JobProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "JobProfile" ADD COLUMN     "location" TEXT NOT NULL,
DROP COLUMN "skillsRequired",
ADD COLUMN     "skillsRequired" TEXT[];
