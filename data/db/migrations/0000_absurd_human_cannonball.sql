CREATE TYPE "public"."language" AS ENUM('ar-SA', 'de-DE', 'en-AU', 'en-CA', 'en-GB', 'en-US', 'es-ES', 'es-MX', 'fr-CA', 'fr-FR', 'it-IT', 'ja-JP', 'ko-KR', 'nl-NL', 'pt-BR', 'pt-PT', 'ru-RU', 'tr-TR', 'zh-CN');--> statement-breakpoint
CREATE TYPE "public"."readingLevel" AS ENUM('Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade', '6th Grade', '7th Grade', '8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade', 'College', 'Graduate', 'Native');--> statement-breakpoint
CREATE TABLE "preferences" (
	"id" serial PRIMARY KEY NOT NULL,
	"createTs" timestamp DEFAULT now() NOT NULL,
	"userId" text NOT NULL,
	"languageNative" "language" NOT NULL,
	"languageTarget" "language" NOT NULL,
	"readingLevel" "readingLevel" NOT NULL
);
