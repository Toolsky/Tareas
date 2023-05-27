/*
  Warnings:

  - You are about to drop the `persona_tiene_trabajo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "persona_tiene_trabajo" DROP CONSTRAINT "persona_tiene_trabajo_id_personaje_fkey";

-- DropForeignKey
ALTER TABLE "persona_tiene_trabajo" DROP CONSTRAINT "persona_tiene_trabajo_id_trabajo_fkey";

-- DropTable
DROP TABLE "persona_tiene_trabajo";

-- CreateTable
CREATE TABLE "personaje_tiene_trabajo" (
    "id_trabajo" INTEGER NOT NULL,
    "id_personaje" INTEGER NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_termino" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "personaje_tiene_trabajo_pkey" PRIMARY KEY ("id_trabajo","id_personaje")
);

-- AddForeignKey
ALTER TABLE "personaje_tiene_trabajo" ADD CONSTRAINT "personaje_tiene_trabajo_id_trabajo_fkey" FOREIGN KEY ("id_trabajo") REFERENCES "trabajos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_tiene_trabajo" ADD CONSTRAINT "personaje_tiene_trabajo_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
