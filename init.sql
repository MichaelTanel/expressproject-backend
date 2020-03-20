CREATE TABLE IF NOT EXISTS "User" (
    "id" SERIAL PRIMARY KEY,
    "email" varchar(40) NOT NULL,
    "pass" varchar(20) NOT NULL
);