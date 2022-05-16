-- CreateTable
CREATE TABLE "Person" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fullname" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "healthStatus" TEXT NOT NULL DEFAULT 'Good',
    "isAlive" BOOLEAN NOT NULL DEFAULT true,
    "isPregnant" BOOLEAN NOT NULL DEFAULT false
);

-- CreateTable
CREATE TABLE "Donation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "displayName" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "email" TEXT,
    "mobile" TEXT
);

-- CreateTable
CREATE TABLE "Expense" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "description" TEXT
);
