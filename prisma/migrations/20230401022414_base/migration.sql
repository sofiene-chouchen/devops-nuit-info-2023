/*
  Warnings:

  - The primary key for the `Job` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[name]` on the table `Job` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Latitude` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Longitude` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `categorieId` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" DROP CONSTRAINT "Job_pkey",
ADD COLUMN     "Latitude" INTEGER NOT NULL,
ADD COLUMN     "Longitude" INTEGER NOT NULL,
ADD COLUMN     "categorieId" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "evaluation" DOUBLE PRECISION,
ADD COLUMN     "phone" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Job_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Job_id_seq";

-- CreateTable
CREATE TABLE "Categorie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Categorie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Job_name_key" ON "Job"("name");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_categorieId_fkey" FOREIGN KEY ("categorieId") REFERENCES "Categorie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
