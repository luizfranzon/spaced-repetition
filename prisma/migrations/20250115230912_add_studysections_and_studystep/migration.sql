-- CreateTable
CREATE TABLE "study_sections" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "theme" TEXT NOT NULL,
    "description" TEXT,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_done" BOOLEAN NOT NULL DEFAULT false,
    "current_step" INTEGER NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "study_steps" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "stepNumber" INTEGER NOT NULL,
    "distance_from_start" INTEGER NOT NULL
);
