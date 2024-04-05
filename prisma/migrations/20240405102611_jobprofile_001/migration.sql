-- CreateTable
CREATE TABLE "JobProfile" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,
    "requiredExperience" INTEGER NOT NULL,
    "employeeType" TEXT NOT NULL,
    "salary" INTEGER NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "skillsRequired" JSONB NOT NULL,
    "organizationId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JobProfile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JobProfile" ADD CONSTRAINT "JobProfile_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "Organization"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
