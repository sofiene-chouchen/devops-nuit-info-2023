/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Categorie` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Job" DROP CONSTRAINT "Job_categorieId_fkey";

-- AlterTable
ALTER TABLE "Job" ALTER COLUMN "Latitude" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "Longitude" SET DATA TYPE DOUBLE PRECISION;

-- CreateIndex
CREATE UNIQUE INDEX "Categorie_name_key" ON "Categorie"("name");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
