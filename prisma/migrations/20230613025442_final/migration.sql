-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "lastname" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trabajos" (
    "id" SERIAL NOT NULL,
    "descripcion" TEXT NOT NULL,
    "sueldo" INTEGER NOT NULL,

    CONSTRAINT "trabajos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personaje_tiene_trabajo" (
    "id_trabajo" INTEGER NOT NULL,
    "id_personaje" INTEGER NOT NULL,
    "fecha_inicio" TIMESTAMP(3) NOT NULL,
    "fecha_termino" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "personaje_tiene_trabajo_pkey" PRIMARY KEY ("id_trabajo","id_personaje")
);

-- CreateTable
CREATE TABLE "personajes" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "fuerza" INTEGER NOT NULL,
    "fecha_nacimiento" TIMESTAMP(3) NOT NULL,
    "objeto" TEXT NOT NULL,

    CONSTRAINT "personajes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "personaje_habita_reino" (
    "id_personaje" INTEGER NOT NULL,
    "id_reino" INTEGER NOT NULL,
    "fecha_registro" TIMESTAMP(3) NOT NULL,
    "es_gobernante" BOOLEAN NOT NULL,

    CONSTRAINT "personaje_habita_reino_pkey" PRIMARY KEY ("id_personaje","id_reino")
);

-- CreateTable
CREATE TABLE "karts" (
    "id" SERIAL NOT NULL,
    "modelo" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "velocidad_maxima" INTEGER NOT NULL,
    "id_personaje" INTEGER NOT NULL,

    CONSTRAINT "karts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "defensas" (
    "id" SERIAL NOT NULL,
    "defensa" TEXT NOT NULL,

    CONSTRAINT "defensas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "defensas_entre_reinos" (
    "defensas_id" INTEGER NOT NULL,
    "reinos_id" INTEGER NOT NULL,

    CONSTRAINT "defensas_entre_reinos_pkey" PRIMARY KEY ("defensas_id","reinos_id")
);

-- CreateTable
CREATE TABLE "reinos" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "ubicacion" TEXT NOT NULL,
    "superficie" INTEGER NOT NULL,

    CONSTRAINT "reinos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "diplomacias" (
    "id_reino_1" INTEGER NOT NULL,
    "id_reino_2" INTEGER NOT NULL,
    "es_aliado" BOOLEAN NOT NULL,

    CONSTRAINT "diplomacias_pkey" PRIMARY KEY ("id_reino_1","id_reino_2")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_tiene_trabajo" ADD CONSTRAINT "personaje_tiene_trabajo_id_trabajo_fkey" FOREIGN KEY ("id_trabajo") REFERENCES "trabajos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_tiene_trabajo" ADD CONSTRAINT "personaje_tiene_trabajo_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_habita_reino" ADD CONSTRAINT "personaje_habita_reino_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "personaje_habita_reino" ADD CONSTRAINT "personaje_habita_reino_id_reino_fkey" FOREIGN KEY ("id_reino") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "karts" ADD CONSTRAINT "karts_id_personaje_fkey" FOREIGN KEY ("id_personaje") REFERENCES "personajes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "defensas_entre_reinos" ADD CONSTRAINT "defensas_entre_reinos_defensas_id_fkey" FOREIGN KEY ("defensas_id") REFERENCES "defensas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "defensas_entre_reinos" ADD CONSTRAINT "defensas_entre_reinos_reinos_id_fkey" FOREIGN KEY ("reinos_id") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diplomacias" ADD CONSTRAINT "diplomacias_id_reino_1_fkey" FOREIGN KEY ("id_reino_1") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "diplomacias" ADD CONSTRAINT "diplomacias_id_reino_2_fkey" FOREIGN KEY ("id_reino_2") REFERENCES "reinos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
