-- CreateTable
CREATE TABLE "public"."Projet" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "description" TEXT,
    "chefId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Projet_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ProjetMembre" (
    "id" SERIAL NOT NULL,
    "utilisateurId" INTEGER NOT NULL,
    "projetId" INTEGER NOT NULL,

    CONSTRAINT "ProjetMembre_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tache" (
    "id" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT,
    "projetId" INTEGER NOT NULL,
    "assigneAId" INTEGER,
    "statut" TEXT NOT NULL DEFAULT 'EN_ATTENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tache_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProjetMembre_utilisateurId_projetId_key" ON "public"."ProjetMembre"("utilisateurId", "projetId");

-- AddForeignKey
ALTER TABLE "public"."Projet" ADD CONSTRAINT "Projet_chefId_fkey" FOREIGN KEY ("chefId") REFERENCES "public"."Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProjetMembre" ADD CONSTRAINT "ProjetMembre_utilisateurId_fkey" FOREIGN KEY ("utilisateurId") REFERENCES "public"."Utilisateur"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ProjetMembre" ADD CONSTRAINT "ProjetMembre_projetId_fkey" FOREIGN KEY ("projetId") REFERENCES "public"."Projet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Tache" ADD CONSTRAINT "Tache_projetId_fkey" FOREIGN KEY ("projetId") REFERENCES "public"."Projet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Tache" ADD CONSTRAINT "Tache_assigneAId_fkey" FOREIGN KEY ("assigneAId") REFERENCES "public"."Utilisateur"("id") ON DELETE SET NULL ON UPDATE CASCADE;
