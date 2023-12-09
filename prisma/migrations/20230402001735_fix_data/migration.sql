/*
  Warnings:

  - You are about to drop the column `Latitude` on the `Job` table. All the data in the column will be lost.
  - You are about to drop the column `Longitude` on the `Job` table. All the data in the column will be lost.
  - Added the required column `latitude` to the `Job` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitude` to the `Job` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "Latitude",
DROP COLUMN "Longitude",
ADD COLUMN     "latitude" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitude" DOUBLE PRECISION NOT NULL;
