import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const watercolorPieces = pgTable("watercolor_pieces", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  price: integer("price").notNull().default(0),
  medium: text("medium").notNull().default("Watercolor on paper"),
  size: text("size").notNull().default('9"×12"'),
  year: text("year").notNull(),
  status: text("status").notNull().default("Available"), // "Available" | "Sold" | "NFS"
  description: text("description"),
  position: integer("position").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const watercolorStudies = pgTable("watercolor_studies", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  imageUrl: text("image_url").notNull(),
  price: integer("price").notNull().default(0),
  medium: text("medium").notNull().default("Watercolor study"),
  year: text("year").notNull(),
  status: text("status").notNull().default("Available"), // "Available" | "Sold"
  position: integer("position").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

export const digitalPieces = pgTable("digital_pieces", {
  id: text("id").primaryKey(),
  title: text("title").notNull(),
  srcUrl: text("src_url").notNull(),
  category: text("category").notNull(), // "neon" | "portraits" | "characters" | "cartoon" | "ink" | "studies"
  position: integer("position").notNull().default(0),
  createdAt: timestamp("created_at").defaultNow(),
});
